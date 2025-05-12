import React, { useState } from 'react';
import { BtnwithIcon} from '../CommonComponents/BtnwithIcon';
import { LuLayoutDashboard } from "react-icons/lu";
import { SidebarManu } from './SidebarManu';
import logo from '../assets/Images/logo.png'
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({toggleSidebar}) => {
  const basicCss='font-sans font-semibold min h-screen overflow-y-auto transition-all duration-700 pb-10'
  return (
    //min div
    <div className={basicCss}>
      <div className='md:hidden flex items-center justify-between p-4 bg-white'>
        <img src={logo} alt="" className='w-[50%] h-[40%] object-contain'/>
        <div className='mx-6 text-2xl'>
          <RxCross2 onClick={toggleSidebar}/>
        </div>
      </div>
      <BtnwithIcon title="Dashboard" icon={<LuLayoutDashboard />} path="/MainLayout" />
      <div>
        <SidebarManu/>
      </div>
</div>
  );
}

export default Sidebar;

