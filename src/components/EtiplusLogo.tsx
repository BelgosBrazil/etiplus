import React from "react";

interface EtiplusLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const EtiplusLogo: React.FC<EtiplusLogoProps> = ({ 
  className = "", 
  showText = true,
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF8C42", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#E8553D", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Signal lines (Wi-Fi style) - three curved lines above */}
        <path
          d="M 40 30 Q 60 25, 80 30"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 35 40 Q 60 33, 85 40"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 50 Q 60 41, 90 50"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Main E/T intertwined abstract shape */}
        <path
          d="M 45 60 C 45 60, 50 55, 60 58 C 70 61, 75 65, 75 70 C 75 75, 70 80, 65 82 C 60 84, 50 85, 45 85 C 40 85, 38 80, 38 75 C 38 70, 40 65, 45 60 Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M 55 68 C 58 66, 62 66, 65 68 M 50 78 C 53 76, 57 76, 62 78"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {showText && (
        <span className={`font-semibold ${textSizeClasses[size]} text-white`}>
          et<span className="relative inline-block">
            i
            <span className="absolute -top-1 left-0.5 w-1 h-1 bg-[#FF8C42] rounded-sm"></span>
          </span>plus
        </span>
      )}
    </div>
  );
};

export default EtiplusLogo;

