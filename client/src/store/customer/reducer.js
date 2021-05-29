import React from 'react';
import {
  FETCH_ALL_CUSTOMERS,
  FETCH_CUSTOMER
} from './actionTypes'
import { Link } from 'react-router-dom'

// Customer reducer
const customerReducerDefaultState = {
  allCustomers:[
    {
      no: 1,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 2,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 3,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 4,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 5,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 6,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
    {
      no: 7,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
  ],
  singleCustomer:[
    {
      no: 1,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "test@test.com",
      phoneNo: "0719-888-888",
      role: <div className="badge badge-soft-success font-size-12">Customer</div>,
      location: "Karen, Mukoma",
      view: <Link to="/orderDetails" className="badge badge-soft-success font-size-14">View </Link>
    },
  ]
}

const customer = (state = customerReducerDefaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_CUSTOMERS:
        return {
          ...state,
          allCustomers: action.payload
        }
    case FETCH_CUSTOMER:
        return {
          ...state,
          singleCustomer: action.singleCustomer
        }
    default:
      return state;
  }
}

export default customer;
