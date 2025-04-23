
import FilterInput from '../../Components/FilterComponents/FilterInput';
import React from 'react';
import Button from '../../Components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddAdministratorForm = () => {
  const cancelProduct=useNavigate();
  const [administratorData, setAdminitratortData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });
  function handleCancel(){
    cancelProduct("/MainLayout/administrator")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminitratortData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const isValid = administratorData.name && administratorData.email && administratorData.phone && administratorData.status;
  
    if (isValid) {
      const existingAdmin = JSON.parse(localStorage.getItem('administrator')) || [];
  
      const updatedAdmin = [...existingAdmin, administratorData];
      localStorage.setItem('administrator', JSON.stringify(updatedAdmin));
  
      alert('Admin saved!');
  
      setAdminitratortData({
        name: "",
        email: "",
        phone: "",
        status: "Active",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>   
   <form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
         
   
         <div>
          
           <FilterInput
           label="Name"
             name="name"
             value={administratorData.name}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           
           <FilterInput
           label="Email"
             name="email"
             value={administratorData.email}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

         <div>
           
           <FilterInput
           label="Phone" 
             name="phone"
             type="text"
             value={administratorData.phone}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
  
   
         <div>
        
           <FilterInput
           label="Status"
            name="status"
            type="text"
            value={administratorData.status}
            onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
             
           />
         </div>
      
     
     
  
       <div className='flex gap-3'>
       <Button type='button' label="save" onClick={handleSave}/>
       <Button type='button' label="cancel" onClick={handleCancel}/>
       </div>
       </form>
       </>
  );
}

export default AddAdministratorForm;
