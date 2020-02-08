import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  TablePagination
} from '@material-ui/core';

import Skeleton from '@material-ui/lab/Skeleton';

import { getInitials } from 'helpers';



const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  tableContainer: {
    maxHeight: 500
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ServicesTable = props => {
  const { className, services, ...rest } = props;

  const classes = useStyles();

  const [selectedService, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { services } = props;

    let selectedService;

    if (event.target.checked) {
      selectedService = services.map(service => service.id);
    } else {
      selectedService = [];
    }

    setSelectedUsers(selectedService);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedService.indexOf(id);
    let newSelectedServices = [];

    if (selectedIndex === -1) {
      newSelectedServices = newSelectedServices.concat(selectedService, id);
    } else if (selectedIndex === 0) {
      newSelectedServices = newSelectedServices.concat(selectedService.slice(1));
    } else if (selectedIndex === selectedService.length - 1) {
      newSelectedServices = newSelectedServices.concat(selectedService.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedServices = newSelectedServices.concat(
        selectedService.slice(0, selectedIndex),
        selectedService.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedServices);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={services.length > 0 && selectedService.length === services.length}
                      color="primary"
                      indeterminate={
                        selectedService.length > 0 &&
                        selectedService.length < services.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  
                  <TableCell>Customer</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Pump No</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Partner (*)</TableCell>
                  {/* <TableCell>Phone (*)</TableCell> */}
                  <TableCell>Vehicle No</TableCell>
                
                </TableRow>
              </TableHead>
              
              {
                services.length <= 0 ? (
                  <TableBody>
                    <TableRow>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                      <TableCell><Skeleton /></TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  <TableBody>
                    {services.slice(0, rowsPerPage).map(service => (
                      <TableRow
                        className={classes.tableRow}
                        hover
                        key={service.id}
                        selected={selectedService.indexOf(service.id) !== -1}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedService.indexOf(service.id) !== -1}
                            color="primary"
                            onChange={event => handleSelectOne(event, service.id)}
                            value="true"
                          />
                        </TableCell>
                        {/* <TableCell>
                          <div className={classes.nameContainer}>
                            <Avatar
                              className={classes.avatar}
                              src={service.avatarUrl}
                            >
                              {getInitials(service.name)}
                            </Avatar>
                            <Typography variant="body1">{service.name}</Typography>
                          </div>
                        </TableCell> */}
                        <TableCell>{service.sCustName}</TableCell>
                        <TableCell><a href="tel:{service.sPhone}">{service.sPhone}</a></TableCell>
                        <TableCell>
                          {moment(service.sDate.toDate()).format('DD/MM/YYYY')}
                        </TableCell>
                        <TableCell>{service.sPlace}</TableCell>
                        <TableCell>{service.sNo}</TableCell>
                        <TableCell>{service.sType}</TableCell>
                        <TableCell>{service.sAmount}</TableCell>
                        <TableCell>{service.sPartner}</TableCell>
                        {/* <TableCell><a href="tel:{service.pPhone}">{service.pPhone}</a></TableCell> */}
                        <TableCell>{service.sVehicleNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                )

              }        

              
            </Table>
            </TableContainer>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={services.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

ServicesTable.propTypes = {
  className: PropTypes.string,
  services: PropTypes.array.isRequired,
  service: PropTypes.object.isRequired
};

export default ServicesTable;
