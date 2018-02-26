/**
 * Display user credentials.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/Header/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
};

export class Profile extends React.PureComponent {
  render() {
    const credentials =
      this.props.user.credentials.map((credential) => (
        <Typography
          align="center"
          variant="subheading"
          key={`${credential.type}|${credential.status}`}
        >
          {`${credential.type} : ${credential.status}`}
          <DeleteIcon />
        </Typography>
      )
    );
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          align="center"
          variant="headline"
        >
          { this.props.user.username }
        </Typography>
        <Typography
          align="center"
          variant="subheading"
        >
        </Typography>
        {credentials}
        <br />
        <Divider />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withStylesComp = withStyles(styles);

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withStylesComp,
)(Profile);
