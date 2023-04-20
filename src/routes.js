import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,MdFaceRetouchingNatural,
  MdOutlineShoppingCart,
  MdMasks,
  MdSmartDisplay,
  MdHandyman,
  MdNaturePeople,
} from "react-icons/md";

// Admin Imports

import FaceMask from "views/admin/DashBoard";
import TeamSelection from "views/admin/TeamSelection";

import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import RegisterCentered from "views/auth/register";

const routes = [
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   path: "/default",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: MainDashboard,
  // },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  }, {
    name: "Register",
    layout: "/auth",
    path: "/register",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: RegisterCentered,
  },
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/face-mask",
    icon: (
      <Icon
        as={MdMasks}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: FaceMask,
    secondary: true,
  },  {
    name: "TeamSelection",
    layout: "/admin",
    path: "/team-selection",
    icon: (
      <Icon
        as={MdMasks}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: TeamSelection,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: Profile,
  // },

  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: RTL,
  // },
];

export default routes;
