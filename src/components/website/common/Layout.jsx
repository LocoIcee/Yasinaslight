import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // Add Google Fonts
  React.useEffect(() => {
    // Add the necessary Google Font links
    const linkCormorant = document.createElement("link");
    linkCormorant.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap";
    linkCormorant.rel = "stylesheet";
    document.head.appendChild(linkCormorant);
    
    const linkOpenSans = document.createElement("link");
    linkOpenSans.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap";
    linkOpenSans.rel = "stylesheet";
    document.head.appendChild(linkOpenSans);
    
    const linkTangerine = document.createElement("link");
    linkTangerine.href = "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap";
    linkTangerine.rel = "stylesheet";
    document.head.appendChild(linkTangerine);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(linkCormorant);
      document.head.removeChild(linkOpenSans);
      document.head.removeChild(linkTangerine);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;