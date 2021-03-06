import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectRole } from './selectors';
import reducer from './reducer';
import { changeUser } from './actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const users = [
  {
    username: 'Subhadeep',
    role: 'Recepient',
    credentials: [
      {
        type: 'degree',
        status: 'Master of Information Systems',
      },
      {
        type: 'school',
        status: 'Carnegie Mellon University',
      },
      {
        type: 'title',
        status: 'Software Engineer',
      },
    ],
  },
  {
    username: 'Carnegie Mellon University',
    role: 'Issuer',
    credentials: [
      {
        type: 'institution',
        status: 'Education Organization',
      },
    ],
  },
];

class MenuAppBar extends React.PureComponent {
  state = {
    auth: true,
    anchorEl: null,
  };

  componentDidMount() {
    this.props.onChangeUser(users[0]);
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelect = (evt, user) => {
    this.handleClose();
    this.props.onChangeUser(user);
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Echolink
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
              { this.props.role }
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {
                    users.map((user) =>
                      <MenuItem key={user.username} onClick={(event) => this.handleSelect(event, user)}>{user.username}</MenuItem>
                    )
                  }
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.string,
  onChangeUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUser: (user) => dispatch(changeUser(user)),
  };
}

const mapStateToProps = createStructuredSelector({
  role: makeSelectRole(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withStylesComp = withStyles(styles);
const withReducer = injectReducer({ key: 'header', reducer });

export default compose(
  withReducer,
  withConnect,
  withStylesComp,
)(MenuAppBar);
