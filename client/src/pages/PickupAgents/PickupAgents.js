import React, { Component } from 'react';
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import PickupAgentDatatable from '../../components/PickupAgent/PickupAgentDatatable';
import PickupAgentRegForm from '../../components/PickupAgent/PickupAgentRegForm';

import CustomButton from '../../components/CustomButton/CustomButton';

class PickupAgents extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Pickup Agents", link : "#" },
            ],
            isModalOpen: false
        };
        // bind this here
    }


    render() {
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
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="PickupAgents" breadcrumbItems={this.state.breadcrumbItems} />
                      <CustomButton handleClick={openModal} label="Add Pickup Agent"/>
                      <PickupAgentDatatable />
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
            </React.Fragment>
        );
    }
}

export default PickupAgents;
