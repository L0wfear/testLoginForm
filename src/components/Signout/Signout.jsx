import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../redux/authReducer';

const Signout = (props) => {
    const onLogout = (e) => {
        e.preventDefault();
        props.logout();
    }
    if (!props.isAuth) return <Redirect to = {'/'} />;

    return <Box component="div" align="center" mt = {35} >
                <Button onClick = {(e) => onLogout(e)} fullWidth variant="contained" color="secondary">
                     Signout
                </Button>
            </Box>

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect (mapStateToProps, {logout}) (Signout);