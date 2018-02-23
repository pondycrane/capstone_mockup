/**
 * Display user credentials.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';

export class Profile extends React.PureComponent {
  render() {
    const data = {
      name: "Hank Huang",
      degree: "Master of Information Systems",
      school: "Carnegie Mellon University",
      title: "Software Engineer",
    }
    return (
      <div>
        <Typography
          align="center"
          variant="headline"
        >
        { data.name }
        <DeleteIcon />
        </Typography>
        <Typography
          align="center"
          variant="subheading"
        >
        { data.title }
        <DeleteIcon />
        </Typography>
        <Typography
          align="center"
          variant="caption"
        >
        { data.school + " - " + data.degree }
        <DeleteIcon />
        </Typography>
        <Divider />
      </div>
    );
  }
}

export default Profile;
