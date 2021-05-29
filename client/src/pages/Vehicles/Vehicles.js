import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Vehicles", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    <Breadcrumbs title="Vehicles" breadcrumbItems={this.state.breadcrumbItems} />
                      <p>Vehicles</p>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Vehicles;
