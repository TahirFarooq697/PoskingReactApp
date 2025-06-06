import React from 'react';
import {FilterInput,FilterDropdownInput,RadioButton} from '../../Components';
import { Button } from '../../CommonComponents';
export const Site = ({path}) => {
    const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-table font-medium text-xl text-secondry' >{path}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
        <FilterDropdownInput label="Date Format" options={[
          { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
          { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
        ]}/>
        <FilterInput label="Date" type="date" name="date" className="input-default"/>
        <FilterInput label="Phone" type="number" name="number" className="input-default"/>
        <FilterInput label="langyage" type="text" name="text" className="input-default"/>
        <FilterInput label="City" type="text" name="text" className="input-default"/>
        <FilterInput label="State" type="text" name="sku" className="input-default"/>
        <div className='grid md:grid-cols-2 gap-x-35 items-center mt-4 text-secondry'>

        <RadioButton label="Cash On Delivery" option1="Enable" option2="Disable"/>
        <RadioButton label="Currency position" option1="()left" option2="()Right"/>
        <RadioButton label="Online payment Gatway" option1="Enable" option2="Disable"/>
        <RadioButton label="Email verification" option1="Enable" option2="Disable"/>
        <RadioButton label="Phone verification" option1="Enable" option2="Disable"/>
        <RadioButton label="Language switch" option1="Enable" option2="Disable"/>
        <RadioButton label="App Debug" option1="Enable" option2="Disable"/>
        </div>
       
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}



