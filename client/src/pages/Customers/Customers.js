import React, { Component } from 'react';
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CustomerDatatable from '../../components/CustomerDatatable/CustomerDatatable';
import UserRegForm from '../../components/UserRegForm/UserRegForm';

import CustomButton from '../../components/CustomButton/CustomButton';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Customers", link : "#" },
            ],
            isModalOpen: false
        };
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
                    <Breadcrumbs title="Customers" breadcrumbItems={this.state.breadcrumbItems} />
                      <CustomButton handleClick={openModal} label="Add User"/>
                      <CustomerDatatable />
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
                    <UserRegForm />
                  </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Customers;
