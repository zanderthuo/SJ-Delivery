import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';

// PickupAgent
import PickupAgent from './pickupAgents/reducer'

// Order Module
import Order from './order/reducer'
import Customer from './customer/reducer'

// Rider
import Rider from './rider/reducer'

const rootReducer = combineReducers({

    // public
    Layout,

    // Authentication
    Account,
    Login,
    Forget,

    // pickupAgents
    PickupAgent,

    // orders
    Order,

    // Customers
    Customer,

    // Riders
    Rider,

});

export default rootReducer;
