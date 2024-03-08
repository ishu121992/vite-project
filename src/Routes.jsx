import { useRoutes } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/Dashboard"
import DashboardLayout from "./components/dashboard/DashBoardLayout";
import MultiModelSearch from "./components/Reports/MultiModelSearch";


export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children:[
                {
                    path:'',
                    element:<Dashboard />,

                }
            ] ,
        },
        {
            path: "/multimodelsearch",
            element: <DashboardLayout />,

            
            children: [
                {
                    path:'',
                    element:<MultiModelSearch />,
                    
                }
            ] 
            
        },
        // {
        //     path: "/contact",
        //     element: <Contact />,
        // },
    ]);
}