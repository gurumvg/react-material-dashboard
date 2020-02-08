import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import firebase from '../../../../../../firebase';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  debugger;
  const firebases = firebase;
  console.log(firebase);

  const { className, user, ...rest } = props;

  const classes = useStyles();

  const userDisplay = {
    name: user.displayName,
    avatar: user.photoURL,
    email: user.email
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={userDisplay.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {userDisplay.name}
      </Typography>
      <Typography variant="body2">{userDisplay.email}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
