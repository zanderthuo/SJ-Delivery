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
import PickupAgentDetails from '../../components/PickupAgent/PickupAgentDetails';
import PickupAgentDetailsForm from '../../components/PickupAgent/PickupAgentDetailsForm';
import PickupAgentStoreDetailsForm from '../../components/PickupAgent/PickupAgentStoreDetailsForm';

import CustomButton from '../../components/CustomButton/CustomButton';

class PickupAgentsProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Pickup Agents Profile", link : "#" },
            ],
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="PickupAgents" breadcrumbItems={this.state.breadcrumbItems} />
                      <Row style={{backgroundColor: '#F1F5F7'}}>
                        <Col xl={4}>
                          <PickupAgentDetails />
                        </Col>
                        <Col xl={8}>
                          <PickupAgentDetailsForm />
                          <PickupAgentStoreDetailsForm />
                        </Col>
                      </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default PickupAgentsProfile;
