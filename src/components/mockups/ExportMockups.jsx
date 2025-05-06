import React, { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";
import HomePageMockup from "./HomePageMockup";
import AboutPageMockup from "./AboutPageMockup";
import ServicesPageMockup from "./ServicesPageMockup";
import ContactPageMockup from "./ContactPageMockup";
import ColorPalette from "./ColorPalette";
import MobileMockup from "./MobileMockup";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

const ExportMockups = () => {
  const [exportStatus, setExportStatus] = useState({
    home: "pending",
    about: "pending",
    services: "pending",
    contact: "pending",
    colorPalette: "pending",
    mobile: "pending"
  });

  const [overallProgress, setOverallProgress] = useState(0);

  // Refs to capture
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const colorPaletteRef = useRef(null);
  const mobileRef = useRef(null);

  // Function to export a component as an image
  const exportAsImage = async (element, fileName) => {
    if (!element) {
      console.error(`Element for ${fileName} not found`);
      return null;
    }

    try {
      setExportStatus(prev => ({ ...prev, [fileName.split('_')[0]]: "exporting" }));
      
      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true,
      });
      
      // Create link for download
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
      
      setExportStatus(prev => ({ ...prev, [fileName.split('_')[0]]: "completed" }));
      return dataUrl;
    } catch (error) {
      console.error(`Failed to export ${fileName}:`, error);
      setExportStatus(prev => ({ ...prev, [fileName.split('_')[0]]: "failed" }));
      return null;
    }
  };

  // Export all mockups
  const exportAllMockups = async () => {
    const mockups = [
      { ref: homeRef, name: "home_mockup", label: "Home Page" },
      { ref: aboutRef, name: "about_mockup", label: "About Page" },
      { ref: servicesRef, name: "services_mockup", label: "Services Page" },
      { ref: contactRef, name: "contact_mockup", label: "Contact Page" },
      { ref: colorPaletteRef, name: "colorPalette_mockup", label: "Color Palette" },
      { ref: mobileRef, name: "mobile_mockup", label: "Mobile Design" }
    ];

    let completed = 0;
    const total = mockups.length;

    for (const mockup of mockups) {
      console.log(`Exporting ${mockup.label}...`);
      await exportAsImage(mockup.ref.current, `yasinaslight_${mockup.name}`);
      completed++;
      setOverallProgress(Math.round((completed / total) * 100));
      // Add a small delay to prevent browser from being overwhelmed
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "pending":
          return "bg-gray-200 text-gray-800";
        case "exporting":
          return "bg-yellow-200 text-yellow-800 animate-pulse";
        case "completed":
          return "bg-green-200 text-green-800";
        case "failed":
          return "bg-red-200 text-red-800";
        default:
          return "bg-gray-200";
      }
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">Export Mockups</h1>
        <p className="text-gray-600 mb-6">
          Click the button below to export all mockups as high-quality PNG files for sharing.
        </p>

        <div className="mb-6">
          <button
            onClick={exportAllMockups}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Export All Mockups
          </button>
        </div>

        {overallProgress > 0 && (
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Export progress: {overallProgress}%
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Home Page</h3>
              <StatusBadge status={exportStatus.home} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_home_mockup.png
            </p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">About Page</h3>
              <StatusBadge status={exportStatus.about} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_about_mockup.png
            </p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Services Page</h3>
              <StatusBadge status={exportStatus.services} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_services_mockup.png
            </p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Contact Page</h3>
              <StatusBadge status={exportStatus.contact} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_contact_mockup.png
            </p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Color Palette</h3>
              <StatusBadge status={exportStatus.colorPalette} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_colorPalette_mockup.png
            </p>
          </div>

          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Mobile Design</h3>
              <StatusBadge status={exportStatus.mobile} />
            </div>
            <p className="text-sm text-gray-500">
              yasinaslight_mobile_mockup.png
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Note: The exported PNG files will be high-resolution (2x pixel density) and will be automatically downloaded to your device.
        </p>
      </div>

      {/* Mockups to be captured - rendered off-screen */}
      <div className="absolute left-[-9999px]">
        <div ref={homeRef} style={{ width: 1200 }}>
          <NavBar />
          <HomePageMockup />
          <Footer />
        </div>
        
        <div ref={aboutRef} style={{ width: 1200 }}>
          <NavBar />
          <AboutPageMockup />
          <Footer />
        </div>
        
        <div ref={servicesRef} style={{ width: 1200 }}>
          <NavBar />
          <ServicesPageMockup />
          <Footer />
        </div>
        
        <div ref={contactRef} style={{ width: 1200 }}>
          <NavBar />
          <ContactPageMockup />
          <Footer />
        </div>
        
        <div ref={colorPaletteRef} style={{ width: 1200 }}>
          <ColorPalette />
        </div>
        
        <div ref={mobileRef} style={{ width: 1200 }}>
          <MobileMockup />
        </div>
      </div>
    </div>
  );
};

export default ExportMockups;