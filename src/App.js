import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Signin from './components/Signin/SigninContainer';
import Box from '@material-ui/core/Box';
import Copyright from './components/Signin/Copyright/Copyright';
import { Route } from 'react-router-dom';
import Signout from './components/Signout/Signout';
import { connect } from 'react-redux';
import {checkIsAuth} from './redux/authReducer';

const App = ({checkIsAuth}) => {

useEffect(() => {
  checkIsAuth();
}, [checkIsAuth]);

  return (
    <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Route exact path = "/" render = {()=> <Signin />} />
            <Route path = "/signout" render = {()=> <Signout  />} />
            <Box mt={8}>
                <Copyright />
            </Box>
    </Container>
  );
}

export default connect (null, {checkIsAuth})(App);
