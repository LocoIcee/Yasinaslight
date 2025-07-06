'use client';
import React from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Cart from "@/components/layout/Cart";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";

const Layout = ({ children }) => {
  React.useEffect(() => {
    const linkCormorant = document.createElement("link");
    linkCormorant.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap";
    linkCormorant.rel = "stylesheet";
    document.head.appendChild(linkCormorant);

    const linkOpenSans = document.createElement("link");
    linkOpenSans.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap";
    linkOpenSans.rel = "stylesheet";
    document.head.appendChild(linkOpenSans);

    const linkTangerine = document.createElement("link");
    linkTangerine.href =
      "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap";
    linkTangerine.rel = "stylesheet";
    document.head.appendChild(linkTangerine);

    return () => {
      document.head.removeChild(linkCormorant);
      document.head.removeChild(linkOpenSans);
      document.head.removeChild(linkTangerine);
    };
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Cart />
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
