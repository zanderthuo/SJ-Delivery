import React from 'react'
import { Button, Row, Col, Card, CardBody, Label , Input, Form, FormGroup, Container } from "reactstrap";
import CustomButtonUpdate from '../CustomButton/CustomButtonUpdate'
import CustomButtonDelete from '../CustomButton/CustomButtonDelete'

const RiderDetailsForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CustomButtonUpdate label="Edit" />
              <CustomButtonDelete label="Delete" />
              <Form>
                  <Row>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-firstname-input1">First name</Label>
                              <Input type="text" className="form-control" id="basicpill-firstname-input1"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-lastname-input2">Last name</Label>
                              <Input type="text" className="form-control" id="basicpill-lastname-input2"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-username-input3">Username</Label>
                              <Input type="text" className="form-control" id="basicpill-username-input3"/>
                          </FormGroup>
                      </Col>
                  </Row>

                  <Row>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-email-input4">Email</Label>
                              <Input type="email" className="form-control" id="basicpill-email-input4"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-password-input5">Password</Label>
                              <Input type="password" className="form-control" id="basicpill-password-input5"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-password-input6">Repeat Password</Label>
                              <Input type="password" className="form-control" id="basicpill-password-input5"/>
                          </FormGroup>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-location-input7">Location</Label>
                              <Input type="text" className="form-control" id="basicpill-location-input7"/>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-gender-input8">Gender</Label>
                              <Input type="select" name="select" id="basicpill-gender-input8">
                                <option>1</option>
                                <option>Male</option>
                                <option>Female</option>
                              </Input>
                          </FormGroup>
                      </Col>
                      <Col lg="4">
                          <FormGroup>
                              <Label for="basicpill-role-input9">Role</Label>
                              <Input type="select" name="select" id="basicpill-role-input9">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Input>
                          </FormGroup>
                      </Col>
                  </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RiderDetailsForm
