import React from 'react';
import { Outlet } from 'react-router-dom';
import {Button} from '../../CommonComponents/Button';

export const LocationSetup = () => {

  return (
    // ......main div....
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 p-4 w-full'>
        <Button label="Countries" path="country"/>
        <Button label="States" path="states"/>
        <Button label="Cities" path="cities"/>
        </div>
        {/* ..........top........... */}
        
        <Outlet/>
       
    </div>
  );
}



