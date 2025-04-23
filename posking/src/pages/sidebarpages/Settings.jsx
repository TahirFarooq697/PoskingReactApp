import React from 'react';
import { Link } from 'react-router-dom';
import SettingSideBar from '../SettingPages/SettingSideBar';
// import BtnwithIcon from '../../Components/BtnwithIcon';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Settings = () => {
  // const styleThis="border-b-1 border-table font-medium"
  // const navigate=useNavigate();
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

export default Settings;
