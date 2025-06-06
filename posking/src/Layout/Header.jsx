import React, { useState, useRef ,useEffect} from 'react';
import logo from "../assets/Images/logo.png"
import profileImg from "../../src/assets/Images/profile.jpg"
import englishFlag from "../assets/Images/englishFlag.png"
import { FaAlignLeft } from "react-icons/fa";
import { ProfileMenu, LanguageSelector } from '../Components';
export const Header = ({toggleSidebar}) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLanguageChange, setIsLanguageChange] = useState(false);
    const profileRef=useRef(null);
    const CountryRef=useRef(null);
    const CountryRefBtn=useRef(null);
    const profileBtnRef = useRef(null);
    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => !prev);
        // console.log("click working")
      };
      function handleLanguage(){
        setIsLanguageChange((prev)=>!prev);
      }

      //////////////////detect outside click...
      useEffect(()=>{
        function handleClickOutside(event){
            if(CountryRef.current && 
                !CountryRef.current.contains(event.target) &&
                CountryRefBtn.current &&
                !CountryRefBtn.current.contains(event.target)
            ){
                setIsLanguageChange(false);
            }

            if(profileRef.current && 
                !profileRef.current.contains(event.target) &&
                profileBtnRef.current &&
                !profileBtnRef.current.contains(event.target)
            ){
                setIsProfileOpen(false);
            }

        }

            document.addEventListener('mousedown', handleClickOutside);
            // clean listner on unmount
            return()=>{
                document.removeEventListener('mousedown', handleClickOutside)
            }
      },[]);

  return (

    <header className="px-3 md:px-4 py-6 md:py-3 mx-4 flex justify-items-start md:justify-between items-center relative mb-2 gap-2">

{/* logo side */}
      <div className="hover:cursor-pointer">
            <img src={logo} alt="logo image" className="w-[50%] md:w-[20%] h-[40%]  md:h-[10%] object-contain"/>
      </div>
{/* button side */}
        <div className="flex items-center space-x-1 md:space-x-3 relative">
            <div className='py-1 md-px-4 relative hidden md:block'>
                <button className="flex items-center p-2 rounded-lg hover:cursor-pointer relative bg-secondary" onClick={handleLanguage} ref={CountryRefBtn}>
                <img className="w-4 h-4 mr-1 rounded-sm" src={englishFlag} alt="Profile" />
                <span className='text-sm text-black'>English</span>
                </button>
                <div className='absolute top-full right-0 mt-3 z-50'>
                {isLanguageChange && <LanguageSelector ref={CountryRef}/>}
                </div>
              
                </div>
{/* sidebar toggle button */}
            <div>
            <button className='hover:cursor-pointer bg-secondary p-2 md:p-3 rounded-lg' onClick={toggleSidebar}>
          <FaAlignLeft className="text-primary" />
        </button>
            </div>
{/* Profile toggle */}
             <div className='relative'>
                <button className="flex items-center md:py-4 px-2 md:px-4 rounded-lg hover:cursor-pointer"
                onClick={handleProfileToggle} ref={profileBtnRef}>
                <img className="w-8 h-8 md:mr-1 rounded-sm" src={profileImg} alt="Profile" />
                <span className='text-sm text-secondry font-medium'>Hello Tahir</span>
                </button>
                
                    <div className='absolute top-full right-0 mb-3 z-50'>
                        {isProfileOpen && <ProfileMenu ref={profileRef}/>}
                    </div>
               
                </div>
        </div>
     
    </header>
  );
}


