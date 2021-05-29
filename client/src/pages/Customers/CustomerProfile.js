import React, { Component } from 'react';
import {
  Col,
  Row,
  Container,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CustomerDatatable from '../../components/CustomerDatatable/CustomerDatatable';

import CustomButton from '../../components/CustomButton/CustomButton';
import UserProfileDetails from '../../components/Customers/UserProfileDetails';
import CustomerDetailsForm from '../../components/Customers/CustomerDetailsForm';

class CustomerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Customer Profile", link : "#" },
            ],
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="CustomerProfile" breadcrumbItems={this.state.breadcrumbItems} />
                      <Row style={{backgroundColor: '#F1F5F7'}}>
                        <Col xl={4}>
                          <UserProfileDetails />
                        </Col>
                        <Col xl={8}>
                          <CustomerDetailsForm />
                          <div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default CustomerProfile;
