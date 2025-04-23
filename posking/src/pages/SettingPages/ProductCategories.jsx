
import React ,{useState}from 'react';
import NormalButton from "../../Components/NormalButton"
import DropdownButton from '../../Components/DropdownButton';
import TableComponent from '../../Components/TableComponent';
import { ProductCategoriesTableColums,ProductCategoriesTable } from '../../constants/SettingSideBarDatas/ProductCategoriesTable';
import Button from '../../Components/Button'


const ProductCategories = ({path}) => {
  
  return (
    <div className='w-full'>
    
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>

      <div className='flex justify-between items-center'>
        <div>
          <span className='text-secondry font-medium'>{path}</span>
        </div>
      <div className='flex gap-3'>
    <NormalButton title="10"/>
  
    <DropdownButton title="Export" options={[
  { label: 'Print', value: 'print' },
  { label: 'XSL', value: 'xsl' },
]}/>
   <DropdownButton title="Import" options={[
  { label: 'Same file', value: 'samefile' },
  { label: 'Upload file', value: 'uploadfile' },
]}/>
    {/* check till here */}
<Button label='Add' path="/MainLayout"/>
</div>
</div>

   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={ProductCategoriesTableColums} data={ProductCategoriesTable}/>
     </div>
     </div>
    </div>
  );
}

export default ProductCategories;


