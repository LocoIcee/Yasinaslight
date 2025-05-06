import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import HomePageMockup from "./HomePageMockup";
import AboutPageMockup from "./AboutPageMockup";
import ServicesPageMockup from "./ServicesPageMockup";
import ContactPageMockup from "./ContactPageMockup";
import ColorPalette from "./ColorPalette";
import MobileMockup from "./MobileMockup";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

const MockupsApp = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Design Overview", description: "Complete redesign concept" },
    { id: "home", label: "Homepage", description: "Home page redesign" },
    { id: "about", label: "About Page", description: "About page redesign" },
    { id: "services", label: "Services Page", description: "Services page redesign" },
    { id: "contact", label: "Contact Page", description: "Contact page redesign" },
    { id: "mobile", label: "Mobile Design", description: "Mobile responsive design" },
    { id: "colors", label: "Style Guide", description: "Color palette & typography" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Yasina's Light Website Redesign
          </h1>
          <p className="mt-1 text-gray-500">
            Visual mockups for the proposed website redesign
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Overview tab */}
            <TabsContent value="overview" className="p-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Yasina's Light Website Redesign</h2>
                  <p className="text-gray-600">
                    A modern, spiritual redesign concept for Yasinaslight.com
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">Current Website</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        The existing website has a functional layout but lacks visual engagement
                        and modern design elements.
                      </p>
                      <div className="aspect-video bg-gray-100 rounded relative overflow-hidden">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: "url(/assets/mockups/current-site.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">Redesign Concept</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        The new design creates a more immersive, professional experience
                        while maintaining the spiritual essence.
                      </p>
                      <div className="aspect-video bg-gray-100 rounded relative overflow-hidden">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: "url(/assets/mockups/redesign-preview.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <h3>Key Improvements</h3>
                  <ul>
                    <li>
                      <strong>Enhanced Visual Hierarchy</strong> - Clear distinction between sections and prominent calls-to-action
                    </li>
                    <li>
                      <strong>Modern Aesthetic Elements</strong> - Subtle animations and contemporary typography
                    </li>
                    <li>
                      <strong>Improved Readability</strong> - Ensuring all content is easily digestible against clean backgrounds
                    </li>
                    <li>
                      <strong>Mobile Optimization</strong> - Better experience on smartphones and tablets
                    </li>
                    <li>
                      <strong>Spiritual Ambiance</strong> - Sacred geometry patterns and light ray effects that enhance the brand identity
                    </li>
                  </ul>

                  <p>
                    Explore each tab to view detailed mockups of individual pages
                    and design elements. The redesign maintains Yasina's Light's
                    core identity while providing a more engaging user experience.
                  </p>
                </div>
                
                <div className="text-sm text-gray-500 text-center">
                  <p>
                    Navigate through the tabs above to explore each page design in detail
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="home">
              <div className="flex flex-col">
                <NavBar />
                <HomePageMockup />
                <Footer />
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="flex flex-col">
                <NavBar />
                <AboutPageMockup />
                <Footer />
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="flex flex-col">
                <NavBar />
                <ServicesPageMockup />
                <Footer />
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="flex flex-col">
                <NavBar />
                <ContactPageMockup />
                <Footer />
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <MobileMockup />
            </TabsContent>

            <TabsContent value="colors">
              <ColorPalette />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Design mockups created for Yasina's Light Website Redesign • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MockupsApp;