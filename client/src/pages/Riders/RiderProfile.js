import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Container,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import CustomButton from '../../components/CustomButton/CustomButton';
import RiderProfileDetails from '../../components/Riders/RiderProfileDetails';
import RiderDetailsForm from '../../components/Riders/RiderDetailsForm';

class RiderProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Rider Profile", link : "#" },
            ],
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="RiderProfile" breadcrumbItems={this.state.breadcrumbItems} />
                      <Link to='/riders'>
                        <ArrowBackIcon />
                      </Link>
                      <Row style={{backgroundColor: '#F1F5F7'}}>
                        <Col xl={4}>
                          <RiderProfileDetails />
                        </Col>
                        <Col xl={8}>
                          <RiderDetailsForm />
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

export default RiderProfile;
