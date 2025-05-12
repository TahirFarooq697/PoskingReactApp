import React from 'react';
import profileImg from "../../assets/Images/profile.jpg"
import { FaUserEdit,FaKey  } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BtnwithIcon } from '../../CommonComponents/BtnwithIcon';
import { useNavigate } from 'react-router-dom';
export const ProfileMenu = ({ref}) => {
  const navigate=useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const handleEditProfile = () => {
    navigate('editProfile');
  };
  
  const handlepasswordchange = () => {
    navigate('changePassword');
  };
  return (
    //main div
    <div className="absolute right-0 top-full w-60 bg-white shadow-lg rounded-lg z-10 p-4 " ref={ref}>
      
      <div className='flex flex-col items-center justify-center'>
        <img src={profileImg} alt="" className='w-15 h-15 rounded-full mb-4'/>
        <h3 className="font-medium text-secondry">Tahir Farooq</h3>
        <p className="text-sm text-secondry">tahirfarooq@gmail.com</p>
        <p className="text-sm text-secondry mb-1">+923554590516</p>
      </div>
      
    {/* </div> */}
    
     <div className='mt-5'>
   
    <BtnwithIcon title="Edit Profile" icon={<FaUserEdit />} handleClick={handleEditProfile} path="editProfile"/>
    <BtnwithIcon title="Change Password" icon={<FaKey />} handleClick={handlepasswordchange} path="changePassword"/>
    <BtnwithIcon title="Logout" icon={<FiLogOut />} handleClick={handleLogout} path='/'/>
   
  </div>
  </div>
  );
}

