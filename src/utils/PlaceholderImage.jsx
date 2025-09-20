import React from "react";

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
      className={`placeholder-surface flex items-center justify-center ${rounded ? 'rounded-lg' : ''} ${className}`.trim()}
      style={{
        width,
        height,
        aspectRatio,
        ...style
      }}
    >
      <div className="flex flex-col items-center justify-center p-4 text-center">
        {useTreeLogo && (
          <div
            className="w-12 h-12 mb-2 opacity-50 bg-tree-logo"
          ></div>
        )}
        <p className="text-sm opacity-70 text-body">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PlaceholderImage;
