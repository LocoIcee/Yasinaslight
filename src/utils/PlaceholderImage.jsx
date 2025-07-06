import React from "react";
import { colors } from "./constants";

const PlaceholderImage = ({ 
  width = "100%", 
  height = "100%", 
  text = "Image Coming Soon",
  style = {},
  className = "",
  rounded = false,
  aspectRatio = "1/1",
  useTreeLogo = true
}) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width: width,
        height: height,
        backgroundColor: `${colors.neutral}`,
        border: `1px dashed ${colors.secondary}`,
        borderRadius: rounded ? "0.5rem" : "0",
        aspectRatio: aspectRatio,
        ...style
      }}
    >
      <div className="flex flex-col items-center justify-center p-4 text-center">
        {useTreeLogo && (
          <div
            className="w-12 h-12 mb-2 opacity-50"
            style={{
              backgroundImage: "url(/assets/tree.webp)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        )}
        <p style={{ color: colors.text }} className="text-sm opacity-70">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PlaceholderImage;