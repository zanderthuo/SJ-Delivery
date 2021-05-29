import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { fetchAllOrders } from '../../store/order/actions'

// import './OrdersDatatable.scss'

class OrdersDatatable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breadcrumbItems : [
        { title : "Tables", link : "#" },
        { title : "Data Tables", link : "#" },
    ],
    }
  }

  render() {

    const data = {
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

    return (
      <>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                     <h4 className="card-title">Orders</h4>
                    <p className="card-title-desc">
                      Your Orders Overview Details
                    </p>
                    <MDBDataTable responsive bordered data={data} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

const mapStatetoProps = state => {
  return {
    fetchAllOrders,
  }
}

export default connect(state => ({ data: fetchAllOrders(state) }))(OrdersDatatable)
