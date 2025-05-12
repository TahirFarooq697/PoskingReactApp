import React from 'react';
import SettingSideBar from '../SettingPages/SettingSideBar';
import { Outlet } from 'react-router-dom';
export const Settings = () => {
  return (
  //main div
    <div>
     {/* ......title top div.... */}

     {/* ..........bottom div.... */}
     <div className='flex flex-row mt-4'>
      {/* ........sidebar............. */}
      
      <div className='min-h-full w-1/4 bg-white p-4 mr-5'>
      <SettingSideBar/>
     </div>

      {/* ................main content dev........ */}
      <div className='min-h-full w-full bg-white'>
    <Outlet/>
      </div>
     </div>
    </div>
  );
}


