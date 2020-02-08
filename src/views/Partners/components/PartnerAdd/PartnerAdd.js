import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';




  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        // width: 250,
      },
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: 250,
      }
    }
  }));

const ServiceAdd = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Card
      {...rest}
      style={{ margin: '2rem' }}
      className={clsx(classes.root, className)}
    >
      <form noValidate autoComplete="off">
        <CardHeader
          subheader="Add new partner"
          title="Partner"
        />
        <Divider />
        
        <CardContent className={classes.form}>
        
          <TextField
            label="Partner Name"
            name="pName"
            type="text"
          />
          <TextField
            label="Phone"
            name="pPhone"
            type="tel"
          />
          <TextField
            label="Address"
            name="pAddress"
            type="textarea"
          />
          <TextField
            label="Place"
            name="pPlace"
            type="text"
          />
          
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Add Partner
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

ServiceAdd.propTypes = {
  className: PropTypes.string
};

export default ServiceAdd;
