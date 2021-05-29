import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/Orders/OrderDetails";
import PickupAgents from "../pages/PickupAgents/PickupAgents";
import PickupAgentsProfile from "../pages/PickupAgents/PickupAgentsProfile";
import Riders from "../pages/Riders/Riders";
import RiderProfile from "../pages/Riders/RiderProfile";
import Customers from "../pages/Customers/Customers";
import CustomerProfile from "../pages/Customers/CustomerProfile";
import Vehicles from "../pages/Vehicles/Vehicles";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },
	{ path: "/orders", component: Orders },
	{ path: "/orderDetails", component: OrderDetails },
	{ path: "/pickupAgents", component: PickupAgents },
	{ path: "/pickupAgentsProfile", component: PickupAgentsProfile },
	{ path: "/riders", component: Riders },
	{ path: "/riderProfile", component: RiderProfile },
	{ path: "/vehicles", component: Vehicles },
	{ path: "/customers", component: Customers },
	{ path: "/customerProfile", component: CustomerProfile },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/login" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/auth-lock-screen", component: AuthLockScreen },
];

export { authProtectedRoutes, publicRoutes };
