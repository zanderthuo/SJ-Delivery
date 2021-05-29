import React from 'react'

import { Card, CardBody, Col, Row } from 'reactstrap'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const OrderDriverDetails = () => {
  return (
    <div className="orderDriverDetails">
      <Card className="orderDriverDetails__card">
        <CardBody className="orderDriverDetails__cardBody">

          <div>
            <AccountCircleIcon />
            <span>Driver</span><br />
            <span>  Paul Ngei</span>
            <div style={{backgroundColor: '#F4F7FF'}} className="driverDetails">
              <p>
              Location :
              <span> Karen, Mukoma</span>
              </p>
              <Row>
                <Col>
                  <p>
                  Email :
                  <span> Test@test.com</span>
                  </p>
                </Col>
                <Col>
                  <p>
                  Phonenumber :
                  <span> +254719808808</span>
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div>
            <p>Vehicle Information</p>
            <Row>
                <Col>
                  <LocalShippingIcon style={{color: '#0D97E4'}} />
                  <span> Suzuki</span>
                  <span> KAA-543P</span>
                </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderDriverDetails
