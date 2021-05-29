import React from 'react'
import SimpleBar from 'simplebar-react'

import { Button, Card, CardBody } from 'reactstrap'

import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

import './RiderProfileDetails.css'

const RiderProfileDetails = () => {
  return (
    <div className="riderProfileDetails">
      <Card>
        <CardBody>
          <Avatar className="riderProfileDetails__avatar" />
          <div className="riderProfileDetails__name">
            <h3>JOHN DOE</h3>
          </div>

          <div className="riderProfileDetails__timestamp">
            <p>
                <span>January 30 2021</span>
            </p>
          </div>

          <div className="riderProfileDetails__phoneNumber">
            <p>
              <span>
                <CallIcon />
              </span>
              <span> +254719999999</span>
            </p>
          </div>

          <div className="riderProfileDetails__email">
            <p>
              <span>
                <EmailIcon />
              </span>
              <span> test@testing.com</span>
            </p>
          </div>

          <div className="riderProfileDetails__status">
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

export default RiderProfileDetails
