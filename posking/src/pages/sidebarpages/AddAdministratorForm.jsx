
import {FilterInput} from '../../Components';
import { Button } from '../../CommonComponents';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {adminFields} from "../../constants/AdministrtorDetailsTable"
export const AddAdministratorForm = () => {
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
        {adminFields.map((field) => (
      <div key={field.name}>
        <FilterInput
          label={field.label}
          name={field.name}
          type={field.type}
          value={administratorData[field.name]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />
      </div>
    ))}
        
      <div className='flex gap-3'>
       <Button type='button' label="save" onClick={handleSave}/>
       <Button type='button' label="cancel" onClick={handleCancel}/>
       </div>
       </form>
       </>
  );
}


