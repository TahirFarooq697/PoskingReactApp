import React, { useState } from 'react';
import {Header} from './Header';
import Sidebar from './Sidebar';
import { Outlet ,Link} from 'react-router-dom';

const MainLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  function toggleSidebar(){
    setIsSidebarOpen((prev)=>!prev)
  }
  return (
   
  //Main div
    <div className="h-screen flex flex-col">
       
        {/*Top Header div */}
        <div className="fixed top-0 left-0 w-full h-20 bg-white z-10">
          <Header toggleSidebar={toggleSidebar}/>
        </div>
{/* 
        ..........Bottom Main div.................. */}
        <div className="flex flex-1 mt-5 ">
            {/* bottom left sidebar div */}
            <div className={`fixed md:top-16 left-0 h-full w-[80%] md:w-[20%] md:mt-5 px-3 transition-all duration-500 transform bg-[#F7F7FC] z-50 ${isSidebarOpen ? 'md:translate-x-0 -translate-x-full' : 'translate-x-0 md:-translate-x-full'}` }>
                <Sidebar toggleSidebar={toggleSidebar}/>
              </div>
            {/* bottom right div */}
            <div className={`flex-1 transition-all duration-500 p-6 bg-[#F7F7FC] mt-10 ${isSidebarOpen ? ' md:ml-[20%]' : 'ml-0'}`}>
            {/* .........layout Header.... */}

           <div className='mt-4 text-xl font-semibold hidden md:block'>
          <Link to='/MainLayout' className='text-gray-700'>Dashboard</Link> 
          <span className='text-secondry font-medium'> / title</span>
          </div>

              <Outlet/>
            </div>
            
        </div>
    </div> 
  );
}

export default MainLayout;



