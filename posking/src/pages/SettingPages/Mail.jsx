import React from 'react';
import FilterInput from '../../Components/FilterComponents/FilterInput';
import Button from '../../Components/Button';
import RadioButton from '../../Components/FilterComponents/RadioButton';
const Mail = ({path}) => {
    const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-table font-medium text-xl text-secondry' >{path}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
        
        <FilterInput label="Mail Host" type="text" name="text" className="input-default"/>
        <FilterInput label="Mil Port" type="Text" name="Text" className="input-default"/>
        <FilterInput label="Mail User Name" type="text" name="user name" className="input-default"/>
        <FilterInput label="Mail Password" type="text" name="password mail" className="input-default"/>
        <FilterInput label="Mail from mail" type="text" name="Mail from mail" className="input-default"/>
        <FilterInput label="Mail from mail" type="text" name="Mail from mail" className="input-default"/>
         <RadioButton label="Mail Encryption" option1="SST" option2="TLS"/>
       
       
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}

export default Mail;

