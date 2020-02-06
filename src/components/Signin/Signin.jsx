import React from 'react';
import { Input, InputCheckbox } from '../Commons/FormsControl';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utilits/validator';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const SigninForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={props.classes.form} noValidate>

            <Field variant="outlined" margin="normal" fullWidth name={'email'} component={Input} id="email"
             label="Почта*" autoComplete="email" validate={required} />
            
            <Field variant="outlined" margin="normal" type={'password'} fullWidth name={'password'}
                component={Input} label="Пароль*" id="password" autoComplete="current-password" validate={required}/>

            <Field  component={InputCheckbox} name= {'rememberMe'} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className={props.classes.submit}
            >
                Войти в аккаунт
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Забыли пароль?
                            </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Еще нет аккаунта? Регистрация"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({ form: 'signin' })(SigninForm);