import { MdProductionQuantityLimits } from "react-icons/md";
import { SiAndela,Si9Gag ,SiGooglepubsub } from "react-icons/si";
import { CgShutterstock, CgProfile } from "react-icons/cg";
import { MdCrisisAlert,MdOutlineBusAlert } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaSquarePollVertical } from "react-icons/fa6";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import React from "react";
export const sidebarData = [
    {
      label: "Product And Stock",
      items: [
        { title: "Products", icon: <MdProductionQuantityLimits/>, path: "products" },
        { title: "Purchase", icon: <SiAndela />, path: "purchase"},
        { title: "Damages", icon: <Si9Gag />, path: "damages"},
        { title: "Stock", icon: <CgShutterstock />, path: "stock"},
      ],
    },
    {
      label: "Pos And Orders",
      items: [
        { title: "POS", icon: <MdCrisisAlert />, path: "pos"},
        { title: "POS Orders", icon: <MdOutlineBusAlert />, path: "posOrder"},
      ],
    },
    {
      label: "USERS",
      items: [
        { title: "Administrators", icon: <CgProfile />,path: "administrator"},
        { title: "Customers", icon: <SiGooglepubsub />, path: "customers"},
        { title: "Employee", icon: <GrUserManager />, path: "employee"},
      ],
    },

    {
      label: "REPORTS",
      items: [
        { title: "Sales Report", icon: <RiGitRepositoryCommitsLine /> , path: "salesReport"},
        { title: "Products Report", icon: <FaSquarePollVertical />, path: "productReport" },
        
      ],
    },

    {
      label: "SETUP",
      items: [
        { title: "Settings", icon: <MdOutlineSettings />,path:"settings" },
        
        
      ],
    },
  ];