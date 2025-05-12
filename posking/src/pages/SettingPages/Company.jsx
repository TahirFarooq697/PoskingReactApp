import React from 'react';
import {CompanyfilterFields} from "../../constants/FilterFieldsData"
import {FilterInput} from '../../Components';
import { Button } from '../../CommonComponents';
export const Company = ({path}) => {
    const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-table font-medium text-xl text-secondry' >{path}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
       
        {CompanyfilterFields.map((field, idx) => (
      <FilterInput
        key={idx}
        label={field.label}
        type={field.type}
        name={field.name}
        className="input-default"
      />
    ))}
       
        </div>
        <div className='px-4 ml-4'>
        <FilterInput label="Address" type="text" name="sku" className="input-default h-40"/>
        
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}


