import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CustomButton from '../../components/CustomButton/CustomButton'

import OrdersDatatable from '../../components/OrdersDatatable/OrdersDatatable';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "SJ Delivery", link : "#" },
                { title : "Orders", link : "#" },
            ],
        }
    }

    render() {

      // function to add new order onbutton click
      const handleButtonClick = () => {
        console.log('Wow so easy');
      }
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                      <Breadcrumbs title="Orders" breadcrumbItems={this.state.breadcrumbItems} />
                        {/*add new order button*/}
                        <CustomButton handleClick={handleButtonClick} label="Add Order"/>
                        {/*orders datatable*/}
                        <OrdersDatatable />
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Orders;
