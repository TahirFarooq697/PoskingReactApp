import React from 'react';
import FilterInput from '../../Components/FilterComponents/FilterInput';
import Button from '../../Components/Button';

const Company = ({path}) => {
    const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-table font-medium text-xl text-secondry' >{path}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
        <FilterInput label="Name" type="text" name="name" className="input-default "/>
        <FilterInput label="Lagitude" type="text" name="lagnitude" className="input-default"/>
        <FilterInput label="Email" type="email" name="email" className="input-default"/>
        <FilterInput label="Phone" type="number" name="number" className="input-default"/>
        <FilterInput label="Website" type="text" name="text" className="input-default"/>
        <FilterInput label="City" type="text" name="text" className="input-default"/>
        <FilterInput label="State" type="text" name="sku" className="input-default"/>
        <FilterInput label="Country Code" type="text" name="sku" className="input-default"/>
        <FilterInput label="Zipcode" type="text" name="sku" className="input-default"/>
       
        </div>
        <div className='px-4 ml-4'>
        <FilterInput label="Address" type="text" name="sku" className="input-default h-40"/>
        
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}

export default Company;
