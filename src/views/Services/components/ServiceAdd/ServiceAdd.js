import React, { useState, useEffect } from 'react';
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
  TextField,
  Snackbar,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import apis  from '../../../../apis'

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


import {
  withRouter
} from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  root: {
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: 250,
    }
  }
}));

const ServiceAdd = props =>  {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    sDate: new Date()
  });

  const [status, setStatus] = useState({
    open: false,
    type:'',
    message:''
  });

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    apis.getPartners()
      .then(function(querySnapshot) {
        const fPartners = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          fPartners.push({"id":doc.id, ...data});
        });
        setPartners(fPartners);        
      });
  },[partners.length]);


  const handleChange = event => {
    //data component
    if(event.target) {
      const valuesObj = {
        ...values,
        [event.target.name]: event.target.value
      };

      if(event.target.name === 'sPartner') {
        valuesObj.sPartner = event.currentTarget.innerText;
        valuesObj.sPartnerId = event.target.value;
      }

      setValues(valuesObj);
    } else {
      setValues({
        ...values,
        sDate: event
      });
    }
    
  };

  
  const handleClose = () => {
    setStatus({
      ...status,
      open:false
    });
  };

  const handleAddService = () => {
    apis.addService(values)
      .then(function() {

        setStatus({open: true, type:"added", message:" New service request added for "+values.sVehicleNo});


        setTimeout(()=>{
          props.history.push("/services");
        }, 1000);
        
      });
  };

  return (
    <Card
      {...rest}
      style={{ margin: '2rem' }}
      className={clsx(classes.root, className)}
    >
      <form noValidate autoComplete="off">
        <CardHeader
          subheader="Add new service"
          title="Service"
        />
        <Divider />
        
        <CardContent className={classes.form}>
        
          <TextField
            label="Pump No"
            name="sNo"
            onChange={handleChange}
            type="text"
          />
          <TextField
            label="Type"
            name="sType"
            onChange={handleChange}
            type="text"
          />
          <TextField
            label="Customer Name"
            name="sCustName"
            onChange={handleChange}
            type="text"
          />
          <TextField
            label="Customer Phone"
            name="sPhone"
            onChange={handleChange}
            type="tel"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Partner</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="sPartner"
              onChange={handleChange}
            >
              {partners.map(partner => (
                <MenuItem value={partner.id}>{partner.pName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Vehicle No"
            name="sVehicleNo"
            onChange={handleChange}
            type="text"
          />
          <TextField
            label="Place"
            name="sPlace"
            onChange={handleChange}
            type="text"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                name="sDate"
                onChange={handleChange}
                value={values.sDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            label="Amount"
            name="sAmount"
            type="number"
            onChange={handleChange}
          />
          
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleAddService}
          >
            Add Service
          </Button>
        </CardActions>
      </form>



      <Snackbar
        open={status.open}
        onClose={handleClose}
        TransitionComponent={Fade}
        message={status.message}
      />


    </Card>

    
  );
};

ServiceAdd.propTypes = {
  className: PropTypes.string
};

export default withRouter(ServiceAdd);
