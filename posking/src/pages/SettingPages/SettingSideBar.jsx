import React from 'react';
import { BtnwithIcon } from '../../CommonComponents';

const SettingSideBar = () => {
 
   
  return (
    <>
            <BtnwithIcon title="Company" path="company"/>
            <BtnwithIcon title="Site"  path="site"/>
            <BtnwithIcon title="Mail"  path="mail"/>
            <BtnwithIcon title="Location Setup" path="locatioSetup"/>
            <BtnwithIcon title="Currencies" path="currencySetup"/>
            <BtnwithIcon title="Product Categories" path="ProductCategories"/>
            <BtnwithIcon title="Product Attributies" path="productAttributes"/>
            <BtnwithIcon title="Product Brands" path="productBrand"/>
            <BtnwithIcon title="Suppliers" path='supplier'/>
            <BtnwithIcon title="Units" path="unit"/>
            <BtnwithIcon title="Taxes" path='taxes'/>
           
    </>
  );
}

export default SettingSideBar;
