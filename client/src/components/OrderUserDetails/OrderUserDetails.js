import React from 'react'

import { Card, CardBody, Col, Row } from 'reactstrap'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

  const OrderUserDetails = () => {
  return (
    <div className="orderUserDetails">
      <Card>
        <CardBody>
          <Row>
            <Col xl={4}>
              <div>
                <AccountCircleIcon />
                <span>Customer</span><br />
                <span>  Alexander Ngei</span>
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
            </Col>
            <Col xl={8}>
              <Row>
                <Col xl="6">
                  <h5>Packaging & Pricing</h5>
                </Col>
                <Col xl="6">
                  <h5 className="badge badge-soft-success font-size-16">#NZ1572 IN TRANSIT</h5>
                </Col>
              </Row>
              <Row>
              <Col xl={4}>
                <p>
                  Package-Type<br/>
                <span>Cloth</span>
                </p>
                <p>
                  Total Price<br/>
                <span>Ksh.1250</span>
                </p>
              </Col>
              <Col xl={4}>
                <p>
                  Weight<br/>
                  <span>250KG</span>
                </p>
                <p>
                  Driver Fee<br/>
                <span>Ksh.250</span>
                </p>
              </Col>
              <Col xl={4}>
                <p>
                  Distance<br/>
                <span>25kms</span>
                </p>
                <p>
                  System Fee<br/>
                <span>Ksh.50</span>
                </p>
              </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderUserDetails
