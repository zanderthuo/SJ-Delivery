import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import OrdersDatatable from '../../components/OrdersDatatable/OrdersDatatable';
import OrderActivity from '../../components/OrderActivity/OrderActivity';
import OrderDriverDetails from '../../components/OrderDriverDetails/OrderDriverDetails';
import OrderUserDetails from '../../components/OrderUserDetails/OrderUserDetails';
import OrderMap from '../../components/OrderMap/OrderMap';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Order Details", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                      <Breadcrumbs title="OrderDetails" breadcrumbItems={this.state.breadcrumbItems} />
                      <Row style={{backgroundColor: '#F1F5F7'}}>
                        <Col xl={4}>
                          <OrderActivity />
                          <OrderDriverDetails />
                        </Col>
                        <Col xl={8}>
                          <OrderMap />
                          <div>
                          <OrderUserDetails />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default OrderDetails;
