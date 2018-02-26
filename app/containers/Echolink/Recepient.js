import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import CancelIcon from 'material-ui-icons/Cancel';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Credential from 'components/Credential';
import Option from './Option';

const credentials = [
  { issuer: 'Carnegie Mellon University', recepient: 'Hank Huang', label: 'Master of Information Systems', type: 'Degree', url: 'https://avatars3.githubusercontent.com/u/8454258?s=460&v=4' },
  { issuer: 'Google', recepient: 'Hank Huang', label: 'Software Engineer', type: 'Title', url: 'https://avatars3.githubusercontent.com/u/8454258?s=460&v=4' },
  { issuer: 'Apple', recepient: 'Anurag', label: 'Software Engineer', type: 'Title', url: 'https://avatars3.githubusercontent.com/u/8454258?s=460&v=4' },
  { issuer: 'Carnegie Mellon University', recepient: 'Subhadeep', label: 'Phd of Biotechnology', type: 'Degree', url: 'https://avatars3.githubusercontent.com/u/8454258?s=460&v=4' },
];

const suggestions = credentials.map((suggestion) => ({
  value: suggestion,
  label: `${suggestion.type} : ${suggestion.label}`,
}));

function SelectWrapped(props) {
  const { ...other } = props;
  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{'No results found'}</Typography>}
      arrowRenderer={(arrowProps) => (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
      clearRenderer={() => <ClearIcon />}
      valueComponent={(valueProps) => {
        const { value, children, onRemove } = valueProps;

        const onDelete = (event) => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }
        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

const ITEM_HEIGHT = 48;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: 400,
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  // We had to use a lot of global selectors in order to style react-select.
  // We are waiting on https://github.com/JedWatson/react-select/issues/1679
  // to provide a better implementation.
  // Also, we had to reset the default style injected by the library.
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      height: 'auto',
      background: 'transparent',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0,
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: 'absolute',
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
    },
    '.Select-menu': {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: 'auto',
    },
    '.Select-menu div': {
      boxSizing: 'content-box',
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: 21,
      width: 21,
      zIndex: 1,
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
    },
  },
});

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null,
    result: [],
  };

  handleChangeSingle = (single) => {
    this.setState({
      single,
      result: credentials.filter((data) => data.type === single.type && data.label === single.label),
    });
  };

  handleChangeMulti = (multi) => {
    this.setState({
      multi,
    });
  };

  render() {
    const { classes } = this.props;
    const { single, result } = this.state;

    return (
      <div className={classes.root}>
        {
            result.map((hit) => <Credential key={`${hit.label}${hit.recepient}${hit.issuer}${hit.type}`} recepient={hit.recepient} issuer={hit.issuer} url={hit.url} type={hit.type} title={hit.label} />)
        }
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          inputProps={{
            classes,
            value: single,
            onChange: this.handleChangeSingle,
            placeholder: 'Search Key Word',
            instanceId: 'react-select-single',
            id: 'react-select-single',
            name: 'react-select-single',
            simpleValue: true,
            options: suggestions,
          }}
        />
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationReactSelect);
