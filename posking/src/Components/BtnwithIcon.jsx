import React from 'react';
import { NavLink } from 'react-router-dom';
const BtnwithIcon = ({title, icon,path}) => {
  const baseClasses="p-3 rounded hover:bg-gray-100 text-secondry flex items-center border-b-1 border-table font-medium"
  const checkIsImg=typeof icon==='string';
  return (
   <NavLink to={path} className={({ isActive }) =>
    `${baseClasses} ${isActive ? 'btn-nav-active' : ''}`
  }
 >

{checkIsImg ?(
   <img src={icon} alt={title} className="w-4 h-4" />
):
(<span className="text-secondry px-2" >{icon} </span>)}

        <span>{title}</span>
</NavLink>
  );
}

export default BtnwithIcon;
