import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PartnersTable, PartnersToolbar } from './components';




// import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Services = () => {
  const classes = useStyles();

  const [users] = useState([]);

  return (
    <div className={classes.root}>
      <PartnersToolbar />
      <div className={classes.content}>
        <PartnersTable users={users} user={{}} />
      </div>
    </div>
  );
};

export default Services;
