
import FilterInput from '../../Components/FilterComponents/FilterInput';
import React from 'react';
import Button from '../../Components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddEmployeeForm = () => {
  const cancelProduct=useNavigate();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });
  function handleCancel(){
    cancelProduct("/MainLayout/employee")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const isValid = employeeData.name && employeeData.email && employeeData.phone && employeeData.status;
  
    if (isValid) {
      const existingEmployee = JSON.parse(localStorage.getItem('employee')) || [];
  
      const updatedCustomer = [...existingEmployee, employeeData];
      localStorage.setItem('employee', JSON.stringify(updatedCustomer));
  
      alert('Employee saved!');
  
      setEmployeeData({
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
             value={employeeData.name}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           
           <FilterInput
           label="Email"
             name="email"
             value={employeeData.email}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

         <div>
           
           <FilterInput
           label="Phone" 
             name="phone"
             type="text"
             value={employeeData.phone}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
  
   
         <div>
        
           <FilterInput
           label="Status"
            name="status"
            type="text"
            value={employeeData.status}
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

export default AddEmployeeForm;
