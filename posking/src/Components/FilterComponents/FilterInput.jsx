import React from 'react';
export const FilterInput = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-secondry mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}   
        onChange={onChange}        
        className={className}
      />
    </div>
  );
};



