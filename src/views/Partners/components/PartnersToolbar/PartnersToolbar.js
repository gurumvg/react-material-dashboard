import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { NavLink as RouterLink } from 'react-router-dom';

// import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  fabButton: {
    position: 'fixed',
    bottom: '15px',
    right: '15px'
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const ServicesToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        
        <Fab 
          color="primary" 
          className={classes.fabButton} 
          component={CustomRouterLink}
          to="/addpartner" 
          aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div className={classes.row}>
        {/* <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        /> */}
      </div>
    </div>
  );
};

ServicesToolbar.propTypes = {
  className: PropTypes.string
};

export default ServicesToolbar;
