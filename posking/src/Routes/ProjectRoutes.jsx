import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeSummery,
  SignIn,
  EditProfile,
  ChangePassword,
  ProductDetail,
  DamagesDetails,
  Purchse,
  StockDetails,
  AdministrtorDetails,
  CustomersDetails,
  EmployeeDetails,
  SalesReport,
  ProductReport,
  PosDetails,
  AddProductForm,
  AddPurchaseForm,
  AddAdministratorForm,
  AddCustomerForm,
  AddEmployeeForm,
  Settings,
  Company,
  Site,
  Mail,
  LocationSetup,
  CurrencySetup,
  Country,
  State,
  Cities,
  ProductCategories,
  ProductAttributes,
  ProductBrands,
  Supplier,
  Unit,
  Taxes
} from '../pages';
import MainLayout from '../Layout/MainLayout';
import { Products } from '../Components';
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
    ],
    {
        basename: '/PoskingReactApp'
      });
  return (
    <RouterProvider router={routes} />
    );
}

export default ProjectRoutes;
