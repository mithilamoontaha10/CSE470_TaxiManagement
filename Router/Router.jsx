import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import OwnerServiceRequest from "../Dashboard/Owner/OwnerServiceRequest";
import AssignDrivers from "../Dashboard/Owner/AssignDrivers";
import AdminServiceRequest from "../Dashboard/Admin/AdminServiceRequest";
import ServiceStatus from "../Dashboard/Owner/ServiceStatus";
import DrivingRequest from "../Dashboard/Driver/DrivingRequest";
import AdminDrivingRequest from "../Dashboard/Admin/AdminDrivingRequest";
import DrivingStatus from "../Dashboard/Driver/DrivingStatus";
import UpdateVehicleStatus from "../Dashboard/Driver/UpdateVehicleStatus";


const Router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error></Error>,
        element: <App></App>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/reg",
                element:<Registration></Registration>
            },

        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:"/dashboard/owner/businessReq",
                element:<OwnerServiceRequest></OwnerServiceRequest>
            },
            {
                path:"/dashboard/owner/assignDrivers",
                element:<AssignDrivers></AssignDrivers>
            },
            {
                path:"/dashboard/owner/serviceStatus",
                element:<ServiceStatus></ServiceStatus>
            },
            {
                path:"/dashboard/admin/serviceReq",
                element:<AdminServiceRequest></AdminServiceRequest>
            },
            {
                path:"/dashboard/admin/driverReq",
                element:<AdminDrivingRequest></AdminDrivingRequest>
            },
            {
                path:"/dashboard/driver/drivingReq",
                element:<DrivingRequest></DrivingRequest>
            },
            {
                path:"/dashboard/driver/drivingStatus",
                element:<DrivingStatus></DrivingStatus>
            },
            {
                path:"/dashboard/driver/UpdateVehicleStatus",
                element:<UpdateVehicleStatus></UpdateVehicleStatus>
            }
        ]
    }
]);

export default Router;