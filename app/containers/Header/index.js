import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from 'material-ui';

export class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
