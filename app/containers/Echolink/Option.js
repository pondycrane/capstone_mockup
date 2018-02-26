import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui/Menu';


class Option extends React.Component {
  handleClick = (event) => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

Option.propTypes = {
  onSelect: PropTypes.func,
  children: PropTypes.string,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  onFocus: PropTypes.func,
  option: PropTypes.object,
};

export default Option;
