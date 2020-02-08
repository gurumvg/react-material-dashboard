import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ServicesTable, ServicesToolbar } from './components';


import apis from '../../apis';



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
  const [services, setServices] = useState([]);

  useEffect(() => {
    apis.getServices()
      .then(function(querySnapshot) {
        const fServices = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          const data = doc.data();
          debugger;
          fServices.push({"id":doc.id, ...data});
        });
        setServices(fServices);        
      });
  },[services.length]);
  

  return (
    <div className={classes.root}>
      <ServicesToolbar />
      <div className={classes.content}>
        <ServicesTable services={services} service={{}} />
      </div>
    </div>
  );
};

export default Services;
