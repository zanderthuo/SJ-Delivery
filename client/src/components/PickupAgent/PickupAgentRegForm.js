import React, { useState, useEffect  } from 'react'
import { Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label , Input, Form, FormGroup, Progress, Container, Table } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

import Message from '../Message/Message'

import { useDispatch, useSelector } from 'react-redux';
import { addPickupStore, fetchAllPickupAgents } from '../../store/pickupAgents/actions'
import classnames from 'classnames';
import { Link } from "react-router-dom";


function PickupAgentRegForm(props) {
  // set state for rider details
  const [store_name, setStore_name] = useState('');
  const [location, setLocation] = useState('');
  const [town, setTown] = useState('');
  const [pickupagent, setPickupagent] = useState('');
  const [pickupagents, setPickupagents] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const dispatch = useDispatch();

  const pickupstoreRegister = useSelector((state) => state.riderRegister)
  const pickupStoreList = useSelector((state) => state.pickupStoreList)

  // const { loading, error, riderInfo } = riderRegister;
  //
  // const handleSubmitForm = (e) => {
  //     e.preventDefault();
  //
  //     // if (first_name !== last_name) {
  //     //   setMessage('Passwords do not match')
  //     // } else {
  //     //   dispatch(addPickStore(store_name,town,location,pickupagent))
  //     //     console.log('hooorray====>')
  //     // }
  //
  //     dispatch(addPickupStore(store_name,town,location,pickupagent));
  //     console.log('yeeeiy!!!')
  // };

  // useEffect(() => {
  //   // axios.get('https://api.github.com/repositories')
  //   //   .then(function (response) {
  //   //     console.log(response);
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //     // })
  //   // const result = axios.get('https://localhost:8000/api/v1/pickupstores')
  //   // .then(res => setPickupagents(res.data));
  //   // console.log(pickupagents)
  //
  //
  // },[])
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        'https://api.github.com/repositories',
      );
      console.log(response);
      // ...
    }
    fetchData();

  },[]);

    return (
      <div>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <p>Loading....</p>}
                {/*<Form onSubmit={handleSubmitForm}>
                    <Row>
                        <Col lg="4">
                            <FormGroup>
                                <TextField
                                  type="text"
                                  className="form-control"
                                  name="store_name"
                                  id="outlined-basic"
                                  label="Store Name"
                                  variant="outlined"
                                  value={store_name}
                                  onChange={(e) => setStore_name(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="4">
                            <FormGroup>
                              <TextField
                                type="text"
                                className="form-control"
                                name="town"
                                value={town}
                                id="outlined-basic"
                                label="Town"
                                variant="outlined"
                                onChange={(e) => setTown(e.target.value)}
                              />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <FormGroup>
                              <TextField
                                type="text"
                                className="form-control"
                                name="location"
                                value={location}
                                id="outlined-basic"
                                label="Location"
                                variant="outlined"
                                onChange={(e) => setLocation(e.target.value)}
                               />
                            </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <TextField
                              type="text"
                              className="form-control"
                              name="pickupagent"
                              value={pickupagent}
                              id="outlined-basic"
                              label="Pickup Agent"
                              variant="outlined"
                              onChange={(e) => setPickupagent(e.target.value)} />
                          </FormGroup>
                        </Col>
                    </Row>
                    <button type="submit">Submit</button>
                </Form>*/}
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>PRICE</th>
                      <th>CATEGORY</th>
                      <th>BRAND</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pickupagents.map((pickupagents) => (
                      <tr key={pickupagents.id}>
                        <td>{pickupagents.name}</td>
                        <td>{pickupagents.description}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

export default PickupAgentRegForm
