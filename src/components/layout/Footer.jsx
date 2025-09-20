import React from "react";
import Link from "next/link";

import ImagePlaceholders from "@/utils/ImagePlaceholders";

const Footer = () => {
  return (
    <footer
      className="w-full py-8 footer-gradient relative overflow-hidden"
    >
      {/* Sacred geometry overlay pattern */}
      <ImagePlaceholders.SacredGeometry size="300px" className="top-0 right-0" opacity={0.05} />
      <ImagePlaceholders.SacredGeometry size="250px" className="bottom-0 left-0" opacity={0.05} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-8">
          <div 
            className="w-16 h-16 mb-2 bg-tree-logo bright-logo"
          ></div>
          <h3 
            className="text-lg font-heading text-neutral"
          >
            Yasina's Light
          </h3>
          <p 
            className="text-sm mt-1 text-neutral-soft"
          >
            Define your Being
          </p>
        </div>

        {/* Social media links */}
        <div className="flex justify-center gap-6 mb-8">
          {['facebook', 'instagram', 'twitter', 'youtube'].map((platform, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-tint border border-neutral-soft transition-all duration-300 text-neutral"
            >
              <span>
                {platform === 'facebook' && 'f'}
                {platform === 'instagram' && 'in'}
                {platform === 'twitter' && 'x'}
                {platform === 'youtube' && 'yt'}
              </span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Products", path: "/products" },
            { name: "Classes", path: "/classes" },
            { name: "Contact", path: "/contact" }
          ].map((link, index) => (
            <Link 
              key={index}
              href={link.path} 
              className="text-sm hover:underline text-neutral-soft"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-neutral-muted">
          <p>Copyright © 2024 Yasinaslight – All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
