
import React from 'react';
import Header from '../Components/Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  function toggleSidebar(){
    setIsSidebarOpen((prev)=>!prev)
  }
  return (
   
  //Main div
    <div className="h-screen flex flex-col">
       
        {/*Top Header div */}
        <div className="fixed top-0 left-0 w-full z-50 h-20 bg-white ">
          <Header toggleSidebar={toggleSidebar}/>
        </div>
{/* 
        ..........Bottom Main div.................. */}
        <div className="flex flex-1 mt-5 ">
            {/* bottom left sidebar div */}
            <div className={`fixed top-16 left-0 h-full w-[20%] mt-5 px-3 transition-all duration-500 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar />
              </div>
            {/* bottom right div */}
            <div className={`flex-1 transition-all duration-500 p-6 bg-[#F7F7FC] mt-10 ${isSidebarOpen ? 'ml-[20%]' : 'ml-0'}`}>
            {/* .........layout Header.... */}

           <div className='mt-4 text-xl font-semibold'>
          <Link to='/MainLayout' className='text-gray-700'>Dashboard</Link> 
          <span className='text-secondry font-medium'> / Title</span>
          </div>

              <Outlet/>
            </div>
           
        </div>
    </div>
  );
}

export default MainLayout;



