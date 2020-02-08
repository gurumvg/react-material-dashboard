import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import firebase from './firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {

  // The component's Local state.
  state = {
    signinStatus: "pending",
    isSignedIn: false, // Local signed-in state.
    user: null
  };


  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({signinStatus: "complete", isSignedIn: !!user, user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  render() {
    // debugger;
    if(this.state.signinStatus === "pending") {
      return (<p>Loading ...</p>);

    } else {
      if (!this.state.isSignedIn) {
        return (
          <div>
            {/* <h1>My App</h1>
            <p>Please sign-in:</p> */}
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        );
  
      } else {
      return (
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes user={this.state.user} />
          </Router>
        </ThemeProvider>
      );
      }

    }
    
  }
}
