import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCustomers } from '../../store/customer/actions'
import MUIDataTable from "mui-datatables";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

import styled from 'styled-components';

class RidersDatatable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breadcrumbItems : [
        { title : "SJ-Delivery", link : "#" },
        { title : "Riders", link : "#" },
      ],
    }
  }

  componentWillMount() {
    }

  render() {
    const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
      `;

    const columns = [
       {
        name: "no",
        label: "No",
        options: {
         filter: false,
         sort: true,
        }
       },
       {
        name: "firstName",
        label: "First Name",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "lastName",
        label: "Last Name",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "emailAddress",
        label: "Email Address",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "phoneNo",
        label: "Phone No",
        options: {
         filter: false,
         sort: false,
        }
       },
       {
        name: "status",
        label: "Status",
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "location",
        label: "Location",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "idNo",
        label: "ID NO",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: " ",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender: () => {
              return (
                <Link to="/riderProfile" className="badge badge-soft-success font-size-14">View </Link>
              );
            }
          }
        },
      ];

      const data = [
        {
          no: 1,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 2,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 3,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 4,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 5,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 6,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        {
          no: 7,
          firstName: "John",
          lastName: "Doe",
          emailAddress: "test@test.com",
          phoneNo: "0719-888-888",
          status: <div className="badge badge-soft-success font-size-12">Customer</div>,
          location: "Karen, Mukoma",
          idNo: "21123349",
        },
        ];

        const options = {
          filterType: 'checkbox',
          selectableRows : false
        };

    return (
      <>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <MUIDataTable
                      title={"Riders"}
                      data={data}
                      columns={columns}
                      options={options}
                    />
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


export default RidersDatatable;
