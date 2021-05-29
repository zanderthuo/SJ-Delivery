import React from 'react'
import SimpleBar from 'simplebar-react'

import { Button, Card, CardBody } from 'reactstrap'

import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

import './PickupAgentDetails.css'

const PickupAgentDetails = () => {
  return (
    <div className="pickupAgentProfileDetails">
      <Card>
        <CardBody>
          <Avatar className="pickupAgentProfileDetails__avatar" />
          <div className="pickupAgentProfileDetails__name">
            <h3>JOHN DOE</h3>
          </div>

          <div className="pickupAgentProfileDetails__timestamp">
            <p>
                <span>January 30 2021</span>
            </p>
          </div>

          <div className="pickupAgentProfileDetails__phoneNumber">
            <p>
              <span>
                <CallIcon />
              </span>
              <span> +254719999999</span>
            </p>
          </div>

          <div className="pickupAgentProfileDetails__email">
            <p>
              <span>
                <EmailIcon />
              </span>
              <span> test@testing.com</span>
            </p>
          </div>

          <div className="pickupAgentProfileDetails__status">
            <p>
                Status
            </p>
            <Button>Active</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default PickupAgentDetails
