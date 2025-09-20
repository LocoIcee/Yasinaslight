import React from "react";

// Next.js serves assets from the /public folder using absolute paths:
const ASSET_BASE_URL = "/assets/";

/**
 * Utility component that provides consistent placeholder images for the website
 * until actual images are available
 */
const ImagePlaceholders = {
  // Logo placeholder 
  Logo: ({ width = "150px", height = "auto", className = "" }) => (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width,
        height,
        backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
  ),

  // Hero background placeholder
  HeroBackground: ({ className = "" }) => (
    <div 
      className={`absolute inset-0 z-0 opacity-15 ${className}`}
      style={{
        backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(2px)"
      }}
    ></div>
  ),

  // Crystal divider placeholder
  CrystalDivider: ({ width = "80%", className = "" }) => (
    <div 
      className={`crystal-divider my-8 ${className}`}
      style={{
        width,
        maxWidth: "200px",
        margin: "2rem auto"
      }}
    ></div>
  ),

  // Sacred geometry placeholder
  SacredGeometry: ({ size = "120px", className = "", opacity = 0.1 }) => (
    <div 
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: opacity,
        transform: "rotate(45deg)"
      }}
    ></div>
  ),

  // Tree of life placeholder
  TreeOfLife: ({ width = "100%", height = "250px", className = "" }) => (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width,
        height,
        backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
  ),

  // Light rays placeholder
  LightRays: ({ className = "" }) => (
    <div 
      className={`absolute inset-0 opacity-20 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at top, var(--color-accent-40), transparent 70%)`,
      }}
    ></div>
  ),

  // Service icon placeholder
  ServiceIcon: ({ name = "", size = "60px", className = "" }) => (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
        backgroundSize: "70%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      title={name}
      aria-label={name}
    ></div>
  ),

  // Product image placeholder
  ProductImage: ({ name = "", className = "" }) => (
    <div 
      className={`rounded-lg overflow-hidden placeholder-surface ${className}`}
      style={{
        width: "100%",
        aspectRatio: "4/3",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
        <div
          className="w-12 h-12 mb-2 opacity-50"
          style={{
            backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <p className="text-sm opacity-70 text-body">
          {name || "Product Image Coming Soon"}
        </p>
      </div>
    </div>
  ),
  
  // Class image placeholder
  ClassImage: ({ name = "", className = "" }) => (
    <div 
      className={`rounded-lg overflow-hidden placeholder-surface ${className}`}
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
        <div
          className="w-12 h-12 mb-2 opacity-50"
          style={{
            backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <p className="text-sm opacity-70 text-body">
          {name || "Class Image Coming Soon"}
        </p>
      </div>
    </div>
  ),

  // Testimonial avatar placeholder
  TestimonialAvatar: ({ size = "60px", className = "" }) => (
    <div 
      className={`rounded-full overflow-hidden bg-neutral border border-accent flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size
      }}
    >
      <div
        className="opacity-50"
        style={{
          width: "60%",
          height: "60%",
          backgroundImage: `url(${ASSET_BASE_URL}tree.webp)`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
    </div>
  )
};

export default ImagePlaceholders;
