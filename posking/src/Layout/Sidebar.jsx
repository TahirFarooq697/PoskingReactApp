import React from 'react';
import BtnwithIcon from '../Components/BtnwithIcon';
import { LuLayoutDashboard } from "react-icons/lu";
import SidebarManu from '../Components/SidebarManu';

const Sidebar = () => {
  
  const basicCss='font-sans font-semibold min h-screen overflow-y-auto transition-all duration-700 pb-10'
  return (
    //min div
    <div className={basicCss}>
      <BtnwithIcon title="Dashboard" icon={<LuLayoutDashboard />} path="/MainLayout"/>

      <div>
        <SidebarManu/>
      </div>
</div>
  );
}

export default Sidebar;
