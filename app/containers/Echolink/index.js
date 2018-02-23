/**
 * Echolink
 *
 * This is the Echolink test page.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Issuer from './Issuer';
import Recepient from './Recepient';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    marginBottom: 200,
  },
});

export class Echolink extends React.PureComponent {
  render() {
    return (
      <div>
        <Profile />
        <Issuer />
        <Recepient />
      </div>
    );
  }
}

export default withStyles(styles)(Echolink);
