/**
 * Echolink
 *
 * This is the Echolink test page.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectRole } from 'containers/Header/selectors';
import { withStyles } from 'material-ui/styles';
import Profile from './Profile';
import Issuer from './Issuer';
import Recepient from './Recepient';

const styles = () => ({
  root: {
    marginBottom: 200,
  },
});

export class Echolink extends React.PureComponent {
  render() {
    return (
      <div>
        <Profile />
        {
          this.props.role === 'Issuer' ?
            <Issuer />
            :
            <Recepient />
        }
      </div>
    );
  }
}

Echolink.propTypes = {
  role: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  role: makeSelectRole(),
});

const withConnect = connect(mapStateToProps);
const withStylesComp = withStyles(styles);

export default compose(
  withStylesComp,
  withConnect,
)(Echolink);
