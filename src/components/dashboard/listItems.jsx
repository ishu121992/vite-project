import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const MainListItems = () => {

  const navigate = useNavigate();

  const dashboardArray = [{
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "dashboard",
  },
  {
    icon: <BarChartIcon />,
    name: "Multi Model Search",
    url: "multimodelsearch",
  }
  // {
  //   icon: <ShoppingCartIcon />,
  //   name: "Orders",
  //   url: "orders",

  // },
  // {
  //   icon: <PeopleIcon />,
  //   name: "Customers",
  //   url: "customers",

  // },
  // {
  //   icon: <LayersIcon />,
  //   name: "Integrations",
  //   url: "integrations",

  // }


  ]




  return (
    <>
      {
        dashboardArray.length > 0 && dashboardArray.map((item, itemIndex) => {


          return (<ListItemButton key={itemIndex} onClick={()=>{
            navigate(`/${item.url}`)
          }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>)
        })
      }







    </>
  );
}



// export const SecondaryListItems = () => {

//   const navigate = useNavigate();

//   const dashboardArray = [{
//     icon: <DashboardIcon />,
//     name: "Dashboard",
//     url: "dashboard",
//   },
//   {
//     icon: <BarChartIcon />,
//     name: "Reports",
//     url: "reports",
//   }
//   // {
//   //   icon: <ShoppingCartIcon />,
//   //   name: "Orders",
//   //   url: "orders",

//   // },
//   // {
//   //   icon: <PeopleIcon />,
//   //   name: "Customers",
//   //   url: "customers",

//   // },
//   // {
//   //   icon: <LayersIcon />,
//   //   name: "Integrations",
//   //   url: "integrations",

//   // }


//   ]




//   return (
//     <>
//       {
//         dashboardArray.length > 0 && dashboardArray.map((item, itemIndex) => {


//           return (<ListItemButton key={itemIndex} onClick={()=>{
//             navigate(`/${item.url}`)
//           }}>
//             <ListItemIcon>
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText primary={item.name} />
//           </ListItemButton>)
//         })
//       }







//     </>
//   );
// }



// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
