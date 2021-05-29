import React, { Component } from 'react';
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import CardWidget from '../../components/CardWidgets/CardWidgets'
import RidersDatatable from '../../components/Riders/RidersDatatable'
import RidersRegForm from '../../components/Riders/RidersRegForm'
import CustomButton from '../../components/CustomButton/CustomButton'

class Riders extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Riders", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="Riders" breadcrumbItems={this.state.breadcrumbItems} />
                      <RidersDatatable />
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Riders;
