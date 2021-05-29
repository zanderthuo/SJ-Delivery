import React from 'react'
import SimpleBar from 'simplebar-react'

import { Button, Card, CardBody } from 'reactstrap'

import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

import './UserProfileDetails.css'

const UserProfileDetails = () => {
  return (
    <div className="userProfileDetails">
      <Card>
        <CardBody>
          <Avatar className="userProfileDetails__avatar" />
          <div className="userProfileDetails__name">
            <h3>JOHN DOE</h3>
          </div>

          <div className="userProfileDetails__timestamp">
            <p>
                <span>January 30 2021</span>
            </p>
          </div>

          <div className="userProfileDetails__phoneNumber">
            <p>
              <span>
                <CallIcon />
              </span>
              <span> +254719999999</span>
            </p>
          </div>

          <div className="userProfileDetails__email">
            <p>
              <span>
                <EmailIcon />
              </span>
              <span> test@testing.com</span>
            </p>
          </div>

          <div className="userProfileDetails__status">
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

export default UserProfileDetails
