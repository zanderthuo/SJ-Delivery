import React from 'react';
import { Col, Card, CardBody, Media, Row } from "reactstrap";

import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './CardWidgets.css'

const CardWidget = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Card>
              <CardBody>
                  <Media>
                      <Media body className="overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">Total Orders</p>
                          <h4 className="mb-0">120</h4>
                      </Media>
                      <div className="text-primary">
                          <ShoppingBasketIcon className="card-icon" />
                      </div>
                  </Media>
              </CardBody>

              <CardBody className="border-top py-3">
                  <div className="text-truncate">
                      <span className="badge badge-soft-success font-size-11 mr-1"><i className="mdi mdi-menu-up"> </i>4</span>
                      <span className="text-muted ml-2">test</span>
                  </div>
              </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
              <CardBody>
                  <Media>
                      <Media body className="overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">Total Pickup Stations</p>
                          <h4 className="mb-0">75</h4>
                      </Media>
                      <div className="text-primary">
                          <StoreIcon className="card-icon" />
                      </div>
                  </Media>
              </CardBody>

              <CardBody className="border-top py-3">
                  <div className="text-truncate">
                      <span className="badge badge-soft-success font-size-11 mr-1"><i className="mdi mdi-menu-up"> </i>4</span>
                      <span className="text-muted ml-2">test</span>
                  </div>
              </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
              <CardBody>
                  <Media>
                      <Media body className="overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">Total Riders</p>
                          <h4 className="mb-0">30</h4>
                      </Media>
                      <div className="text-primary">
                          <SportsMotorsportsIcon className="card-icon" />
                      </div>
                  </Media>
              </CardBody>

              <CardBody className="border-top py-3">
                  <div className="text-truncate">
                      <span className="badge badge-soft-success font-size-11 mr-1"><i className="mdi mdi-menu-up"> </i>4</span>
                      <span className="text-muted ml-2">test</span>
                  </div>
              </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
              <CardBody>
                  <Media>
                      <Media body className="overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">Total Customers</p>
                          <h4 className="mb-0">250</h4>
                      </Media>
                      <div className="text-primary">
                          <PeopleIcon className="card-icon" />
                      </div>
                  </Media>
              </CardBody>

              <CardBody className="border-top py-3">
                  <div className="text-truncate">
                      <span className="badge badge-soft-success font-size-11 mr-1"><i className="mdi mdi-menu-up"> </i>4</span>
                      <span className="text-muted ml-2">test</span>
                  </div>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CardWidget
