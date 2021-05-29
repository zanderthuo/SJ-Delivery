import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { Row, Col, Card, CardBody, Container, Modal, ModalBody, ModalHeader } from "reactstrap";

import PickupAgentRegForm from './PickupAgentRegForm'
import CustomButton from '../CustomButton/CustomButton'

import styled from 'styled-components';

class PickupAgentDatatable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breadcrumbItems : [
        { title : "SJ-Delivery", link : "#" },
        { title : "Customers", link : "#" },
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
        name: " ",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender: () => {
              return (
                <Link to="/pickupAgentsProfile" className="badge badge-soft-success font-size-14">View </Link>
              );
            }
          }
        },
      ];

      const { pickupstoreData } = this.state

      const options = {
        filterType: 'checkbox',
        selectableRows : false
      };

      // function to open modal
      const openModal = (e) => {
         e.preventDefault();
         this.setState({
           isModalOpen: true
         });
       }

       // function to close modal
       const onCloseModal = ()=>{
         this.setState({isModalOpen : false})
       }

    return (
      <>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <MUIDataTable
                      title={"Pick Up Agents"}
                      data={pickupstoreData}
                      columns={columns}
                      options={options}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Modal
          size="xl"
          isOpen={this.state.isModalOpen}
          toggle={this.openModal}
          onClose={this.state.onCloseModal}
        >
          <ModalHeader toggle={() => this.setState({ isModalOpen: false })}></ModalHeader>
          <ModalBody>
            <PickupAgentRegForm />
          </ModalBody>
        </Modal>
      </>
    )
  }
}


export default PickupAgentDatatable;
