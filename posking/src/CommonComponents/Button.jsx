
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Button = ({ label, path, className, onClick, type = "button" }) => {
  const baseStyles = "bg-[#F23E14] text-white py-2 px-4 rounded-md hover:[cursor:pointer] text-center";
  const combinedClasses = `${baseStyles} ${className}`.trim();

  // If a path is provided, render NavLink
  if (path) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? combinedClasses : combinedClasses
        }
      >
        {label}
      </NavLink>
    );
  }

  
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};



