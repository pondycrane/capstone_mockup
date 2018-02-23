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

export default Echolink;
