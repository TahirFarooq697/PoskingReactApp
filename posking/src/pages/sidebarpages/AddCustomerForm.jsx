import {FilterInput} from '../../Components'
import { Button } from '../../CommonComponents';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddCustomerForm = () => {
  const cancelProduct=useNavigate();
  const [custometratorData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });
  function handleCancel(){
    cancelProduct("/MainLayout/customers")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const isValid = custometratorData.name && custometratorData.email && custometratorData.phone && custometratorData.status;
  
    if (isValid) {
      const existingCustomer = JSON.parse(localStorage.getItem('customers')) || [];
  
      const updatedCustomer = [...existingCustomer, custometratorData];
      localStorage.setItem('customers', JSON.stringify(updatedCustomer));
  
      alert('Customer saved!');
  
      setCustomerData({
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
             value={custometratorData.name}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           
           <FilterInput
           label="Email"
             name="email"
             value={custometratorData.email}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

         <div> 
           
           <FilterInput
           label="Phone" 
             name="phone"
             type="text"
             value={custometratorData.phone}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
  
   
         <div>
        
           <FilterInput
           label="Status"
            name="status"
            type="text"
            value={custometratorData.status}
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


