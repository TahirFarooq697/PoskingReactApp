import React from 'react';
import { Button,TableComponent } from '../../CommonComponents';
import { ProductBrandsTable,ProductBrandsTablecolums } from './ProductBrandsTable';

export const ProductBrands = ({path}) => {
  
  return (
    <div className='w-full'>
    
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>

      <div className='flex justify-between items-center'>
        <div>
          <span className='text-secondry font-medium'>{path}</span>
        </div>
      <div className='flex gap-3'>
 
    {/* check till here */}
<Button label='Add Product Brand' path="/MainLayout"/>
</div>
</div>

   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={ProductBrandsTablecolums} data={ProductBrandsTable}/>
     </div>
     </div>
    </div>
  );
}




