import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import CardWidget from '../../components/CardWidgets/CardWidgets'
import RevenueAnalytics from '../../components/RevenueAnalytics/RevenueAnalytics'
import OrderAnalytics from '../../components/OrderAnalytics/OrderAnalytics'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Dashboard", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                      <Breadcrumbs title="Dashboard" breadcrumbItems={this.state.breadcrumbItems} />
                        <CardWidget />
                        <Row>
                          <Col xl={6}>
                            <OrderAnalytics />
                          </Col>
                          <Col xl={6}>
                            <RevenueAnalytics />
                          </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
