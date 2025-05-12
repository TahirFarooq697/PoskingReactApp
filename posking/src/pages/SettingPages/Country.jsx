import React ,{useState}from 'react';
import { Button,TableComponent } from '../../CommonComponents';
import {FilterInput} from '../../Components';
import { CountriesDetailsTable,CountriesTableCoums } from '../../constants/SettingSideBarDatas/CountriesDetailsTable';
export const Country = () => {
  const inputClass = "border border-gray-300 rounded-md p-2";
        const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
       const [showFilterpurchse, isShowFilterpurchae]=useState(false)
      function handleFilderPurchaseForm(){
        isShowFilterpurchae((prev)=>!prev)
      }
  return (
    <div className='w-full'>
    
     {/* .........table... */}
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>
      {/* ...........Header sec..... */}
    

        
    {showFilterpurchse && 
    <form className='mt-4'>
     <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
     <FilterInput label="Name" type="text" name="name" className={inputClass}/>
    <FilterInput label="Code" type="text" name="code" className={inputClass}/>
    <FilterInput label="Status" type="text" name="phone" className={inputClass}/>
    
    
  
    </div>
    <div>
       <Button type="button" label="Search" className={btnClass}/>
       <Button type="button" label="Clear" className={btnClass}/>
    </div>
    </form>
 }
   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={CountriesTableCoums} data={CountriesDetailsTable}/>
     </div>
     </div>
    </div>
  );
}


