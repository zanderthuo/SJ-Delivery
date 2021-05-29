import React from 'react'
import { Button, Row, Col, Card, CardBody, Label , Input, Form, FormGroup, Container } from "reactstrap";
import CustomButtonSave from '../CustomButton/CustomButtonSave';

  const PickupAgentStoreDetailsForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <h5>Store Information</h5>
              <Form>
                  <Row>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-storeid-input1">Store ID</Label>
                              <Input type="text" className="form-control" id="basicpill-storeid-input1"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-storename-input2">Store Name</Label>
                              <Input type="text" className="form-control" id="basicpill-storename-input2"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-location-input3">Location</Label>
                              <Input type="text" className="form-control" id="basicpill-location-input3"/>
                          </FormGroup>
                      </Col>
                  </Row>
                  <CustomButtonSave label="Save" />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PickupAgentStoreDetailsForm
