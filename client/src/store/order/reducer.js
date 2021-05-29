import React from 'react'
import { FETCH_ORDER, FETCH_ALL_ORDERS, EDIT_ORDER,EDIT_ORDER_SUCCESS, EDIT_ORDER_FAILURE } from './actionTypes';
import { Link } from 'react-router-dom'


const initialState = {
  data: {
    columns: [
      {
        label: "No",
        field: "no",
        options: {
         filter: true,
         sort: true,
       },
      },
      {
        label: "Date",
        field: "date",
        options: {
         filter: true,
         sort: true,
       },
      },
      {
        label: "Order ID",
        field: "orderId",
        options: {
         filter: true,
         sort: true,
       },
      },
      {
        label: "Plate No",
        field: "plateNo",
        options: {
         filter: true,
         sort: true,
       },
      },
      {
        label: "Destination",
        field: "destination",
        options: {
         filter: true,
         sort: true,
       },
      },
      {
        label: "Status",
        field: "status",
        options: {
         filter: true,
         sort: true,
       },
     },
     {
       label: "",
       field: "view",
       sort: false
    },
    ],

    rows: [
      {
        no: 1,
        date: "20th April 2021",
        orderId: "NZ1572",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-success font-size-12">Collected</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 2,
        date: "20th April 2021",
        orderId: "NZ1573",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-warning font-size-12">Intransit</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 3,
        date: "20th April 2021",
        orderId: "NZ1574",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-danger font-size-12">Delayed</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 4,
        date: "20th April 2021",
        orderId: "NZ1575",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-danger font-size-12">Delayed</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 5,
        date: "20th April 2021",
        orderId: "NZ1576",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-warning font-size-12">Intransit</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 6,
        date: "20th April 2021",
        orderId: "NZ1577",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-success font-size-12">Collected</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 7,
        date: "20th April 2021",
        orderId: "NZ1578",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-success font-size-12">Collected</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 8,
        date: "20th April 2021",
        orderId: "NZ1579",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-warning font-size-12">Intransit</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 9,
        date: "20th April 2021",
        orderId: "NZ1580",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-warning font-size-12">Intransit</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
      {
        no: 10,
        date: "20th April 2021",
        orderId: "NZ1581",
        plateNo: "KAA-880Y",
        destination: "Karen, Mukoma",
        status: <div className="badge badge-soft-danger font-size-12">Delayed</div>,
        view: <Link to="/orderDetails">View Order</Link>
      },
    ]
  }
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER:
            state = {
                ...state,
                data:action.data
            }
            break;
        case FETCH_ALL_ORDERS:
            state = {
                ...state,
                data:action.data
            }
            break;

        case EDIT_ORDER:
            state = {
              ...state,
              data:action.data
            };
            break;

        default:
            state = {
              ...state,
              data:action.data
            };
            break;
    }
    return state;
}

export default order;
