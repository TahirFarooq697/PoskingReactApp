import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeSummery from '../pages/HomeSummery';
import SignIn from '../pages/SignIn';
import MainLayout from '../Layout/MainLayout';
import EditProfile from '../pages/EditProfile';
import ChangePassword from '../pages/ChangePassword';
import ProductDetail from '../pages/sidebarpages/ProductDetail';
import DamagesDetails from '../pages/sidebarpages/DamagesDetails';
import Purchse from '../pages/sidebarpages/Purchse';
import StockDetails from '../pages/sidebarpages/StockDetails';
import AdministrtorDetails from '../pages/sidebarpages/AdministrtorDetails';
import CustomersDetails from '../pages/sidebarpages/CustomersDetails';
import EmployeeDetails from '../pages/sidebarpages/EmployeeDetails';
import SalesReport from '../pages/sidebarpages/SalesReport';
import ProductReport from '../pages/sidebarpages/ProductReport';
import PosDetails from '../pages/sidebarpages/PosDetails';
import Products from '../Components/Products';
import Settings from '../pages/sidebarpages/Settings';
import Company from '../pages/SettingPages/Company';
import Site from '../pages/SettingPages/Site';
import Mail from '../pages/SettingPages/Mail';
import LocationSetup from '../pages/SettingPages/LocationSetup';
import CurrencySetup from '../pages/SettingPages/CurrencySetup';
import Country from '../pages/SettingPages/Country';
import State from '../pages/SettingPages/State';
import Cities from '../pages/SettingPages/Cities';
import ProductCategories from '../pages/SettingPages/ProductCategories';
import ProductAttributes from '../pages/SettingPages/productAttributes';
import ProductBrands from '../pages/SettingPages/ProductBrands';
import Supplier from '../pages/SettingPages/Supplier';
import Unit from '../pages/SettingPages/Unit';
import Taxes from '../pages/SettingPages/Taxes';
import AddProductForm from '../pages/AddProductForm';
import AddPurchaseForm from '../pages/sidebarpages/AddPurchaseForm';
import AddAdministratorForm from '../pages/sidebarpages/AddAdministratorForm';
import AddCustomerForm from '../pages/sidebarpages/AddCustomerForm';
import AddEmployeeForm from '../pages/sidebarpages/AddEmployeeForm';
const ProjectRoutes = () => {
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<SignIn/>
        },
   
        {
            path:'/MainLayout',
            element:<MainLayout path="mainLayout"/>,
            children: [
                {
                    index: true,
                    element: <HomeSummery />,
                },
                // ....................profile Manus .............
                {
                    path: "editProfile",
                    element: <EditProfile/>
                },
                {
                    path: "changePassword",
                    element: <ChangePassword/>
                },
                // ..............side bar Menus................
                {
                    path: "products",
                    element: <ProductDetail path="Product"/>
                },
                {
                    path: "damages",
                    element: <DamagesDetails path='damages'/>
                },
                {
                    path: "purchase",
                    element: <Purchse path='Purchase'/>
                },
                {
                    path: "stock",
                    element: <StockDetails path='Stock'/>
                },
                {
                path: "AddCustomerForm",
                element: <AddCustomerForm path='AddCustomerForm'/>
            },
                  // ..............Userd sec Menus................
                  {
                    path: "administrator",
                    element: <AdministrtorDetails path="Administrator"/>
                },
                {
                    path: "customers",
                    element: <CustomersDetails path='Customer'/>
                },
                
                {
                    path: "employee",
                    element: <EmployeeDetails Path="Employee"/>
                },
                //........repoets section...........//
                {
                    path: "salesReport",
                    element: <SalesReport path="Sales Report"/>
                },
                {
                    path: "productReport",
                    element: <ProductReport path="Product Report"/>
                },

                //........POS AND ORDER...........//
                {
                    path: "posOrder",
                    element: <PosDetails/>
                },
                
                {
                    path: "pos",
                    element: <Products/>
                },
      ////////////add new data
      {
        path: "AddProductForm",
        element: <AddProductForm path="AddProduct"/>
    },     
    {
        path: "AddPurchaseForm",
        element: <AddPurchaseForm path="AddPurcheForm"/>
    }, 
    {
        path: "AddAdministratorForm",
        element: <AddAdministratorForm path="AddAdministratorForm"/>
    },
    {
        path: "AddEmployeeForm",
        element: <AddEmployeeForm path="AddEmployeeForm"/>
    },
       
                {
                    path: "settings",
                    element: <Settings/>,
                    children: [
                        {
                            index: true, 
                            element: <Company path="Company" />,
                          },
                        {
                            path: "company",
                            element: <Company path="Company"/>,
                           
                        },

                        {
                            path: "site",
                            element: <Site path="Site"/>,
                           
                        },
                        {
                            path: "mail",
                            element: <Mail path="Mail"/>,
                           
                        },

                        {
                            path: "locatioSetup",
                            element: <LocationSetup path="locatioSetup"/>,
                            children:[

                                {
                                    index:true,
                                    element:<Country/>
                                },
                                {
                                    path:"country",
                                    element:<Country/>
                                },
                                {
                                    path:"states",
                                    element:<State/>
                                },
                                {
                                    path:"cities",
                                    element:<Cities/>
                                }
                            ]
                           
                        },
                        {
                            path: "currencySetup",
                            element: <CurrencySetup path="Currencies"/>,
                           
                        },
                        {
                            path: "productCategories",
                            element: <ProductCategories path="ProductCategories"/>,
                           
                        },
                        {
                            path: "productAttributes",
                            element: <ProductAttributes path="Product Attributes"/>,
                           
                        },
                        {
                        path: "productBrand",
                        element: <ProductBrands path="product Brand"/>,
                       
                    },
                    {
                    path: "supplier",
                    element: <Supplier path="Supplier"/>,
                   
                },
                {
                    path: "unit",
                    element: <Unit path="Unit"/>,
                   
                },
                {
                    path: "taxes",
                    element: <Taxes path="Taxes"/>,
                   
                },
                    ]
                    
                },
                
            ]
        }
    ])
  return (
    <RouterProvider router={routes}/>
    );
}

export default ProjectRoutes;
