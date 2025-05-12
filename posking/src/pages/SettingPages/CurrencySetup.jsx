import React from 'react';
import { CurrenciesDetailsTable,CurrentiesTableCoums } from '../../constants/SettingSideBarDatas/CurrenciesDetailsTable';

import { Button,TableComponent } from '../../CommonComponents';
export const CurrencySetup = ({path}) => {
 const btnClassfilter="w-20 border-1 text-primary py-2 px-4 rounded-md  mr-3" //checking for filter
  return (
    <div className='w-full'>
    {/* ......header sec.... */}
    <div className='flex justify-between items-center px-6 mt-8'>
        <div>
            <span className='text-lg font-medium text-secondry'>{path}</span>
        </div>
        <div className='flex gap-3'>

        <Button label="+Add Currency" path="/MainLayout"/>
        
        </div>
    </div>

    {/* ........table body....... */}
    <div className="flex justify-center">
      <TableComponent columns={CurrentiesTableCoums} data={CurrenciesDetailsTable}/>
     </div>
   
     </div>
  );
}


