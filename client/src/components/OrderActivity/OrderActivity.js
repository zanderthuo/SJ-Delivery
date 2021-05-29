import React from 'react'
import SimpleBar from 'simplebar-react'

import { Card, CardBody } from 'reactstrap'

import RoomIcon from '@material-ui/icons/Room';
import PlaceIcon from '@material-ui/icons/Place';

const OrderActivity = () => {
  return (
    <div className="orderActivity">
      <Card>
        <CardBody>
          <h4 className="badge badge-soft-success font-size-16">#NZ1572 IN TRANSIT</h4>
          <h5>Dashiks Shirt Delivery</h5>
          <hr />
              <SimpleBar style={{ maxHeight: "330px" }}>
              <ul className="list-unstyled activity-wid">
                  <li className="activity-list">
                      <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                              <RoomIcon style={{color: '#0D97E4'}} />
                          </span>
                      </div>
                      <div>
                          <div>
                              <h5 className="font-size-13">
                                From <br />
                              <small>On 1 July</small>,<small className="text-muted"> 12:07 am</small>
                              </h5>
                          </div>

                          <div>
                              <p className="text-muted mb-0">Nairobi CBD, Moi Bazzar</p>
                          </div>
                      </div>
                  </li>
                  <li className="activity-list">
                      <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                              <RoomIcon style={{color: '#0D97E4'}} />
                          </span>
                      </div>
                      <div>
                          <div>
                              <h5 className="font-size-13">
                                Right Now <br />
                                <small className="text-muted"> 12:07 am</small>
                              </h5>
                          </div>

                          <div>
                              <p className="text-muted mb-0">Galeria Mall, Langata Rd</p>
                          </div>
                      </div>
                  </li>
                  <li className="activity-list">
                      <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                              <PlaceIcon style={{color: '#0D97E4'}} />
                          </span>
                      </div>
                      <div>
                          <div>
                              <h5 className="font-size-13">
                                To <br/>
                                <small>On 1 July</small>,<small className="text-muted"> 12:07 am</small>
                              </h5>
                          </div>

                          <div>
                              <p className="text-muted mb-0">Karen, Mukoma</p>
                          </div>
                      </div>
                  </li>
              </ul>
          </SimpleBar>
        </CardBody>
      </Card>
    </div>
  )
}

export default OrderActivity
