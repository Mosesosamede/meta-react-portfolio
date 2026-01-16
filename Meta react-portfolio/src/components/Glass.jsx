import React from "react";

export const Glass = ({ children, className = "" }) => (
    <div
        className={`
            bg-white/10 backdrop-blur-md border border-white/20 
            shadow-lg hover:shadow-xl transition-shadow duration-300
            ${className}
        `}
    >
        {children}
    </div>
);