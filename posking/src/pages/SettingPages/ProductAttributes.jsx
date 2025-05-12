import React from 'react';
import { Button,TableComponent } from '../../CommonComponents';
import { ProductAttributesTable,ProductAttributesTablecolums } from '../../constants/SettingSideBarDatas/ProductAttributesTable';

export const ProductAttributes = ({path}) => {
  
  return (
    <div className='w-full'>
    
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>

      <div className='flex justify-between items-center'>
        <div>
          <span className='text-secondry font-medium'>{path}</span>
        </div>
      <div className='flex gap-3'>
 
    {/* check till here */}
<Button label='Add Product Attribute' path="/MainLayout"/>
</div>
</div>

   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={ProductAttributesTablecolums} data={ProductAttributesTable}/>
     </div>
     </div>
    </div>
  );
}




