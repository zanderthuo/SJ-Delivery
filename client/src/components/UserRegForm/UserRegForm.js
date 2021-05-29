import React, { Component } from 'react'
import { Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label , Input, Form, FormGroup, Progress, Container } from "reactstrap";

import classnames from 'classnames';
import { Link } from "react-router-dom";

class UserRegForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
    };
    this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
        if(tab >= 1 && tab <=4 ){
            this.setState({
                activeTab: tab
            });
        }
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
              <div id="basic-pills-wizard" className="twitter-bs-wizard">
                  <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === 1 })} onClick={() => { this.toggleTab(1); }} >
                            <span className="step-number">01</span>
                            <span className="step-title">User Details</span>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === 4 })} onClick={() => { this.toggleTab(4); }} >
                        <span className="step-number">02</span>
                        <span className="step-title">Confirm Detail</span>
                        </NavLink>
                    </NavItem>
                  </ul>
                  <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                      <TabPane tabId={1}>
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
                      </TabPane>

                      <TabPane tabId={4}>
                          <div className="row justify-content-center">
                              <Col lg="6">
                                  <div className="text-center">
                                      <div className="mb-4">
                                          <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                      </div>
                                      <div>
                                          <h5>Confirm Detail</h5>
                                          <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                      </div>
                                  </div>
                              </Col>
                          </div>
                      </TabPane>

                  </TabContent>
                  <ul className="pager wizard twitter-bs-wizard-pager-link">
                  <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                  <li className={this.state.activeTab === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                  </ul>
              </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserRegForm
