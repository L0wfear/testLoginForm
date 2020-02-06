import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Signin from './Signin';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import useStyles from './Styles';


const SigninContainer = (props) => {
    const classes = useStyles();

    const onSubmit = () => {
        props.login();
    }

    if (props.isAuth) return <Redirect to={'/signout'} />;

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Вход в аккаунт
            </Typography>

            <Signin onSubmit={onSubmit} classes={classes} />

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { login })(SigninContainer);