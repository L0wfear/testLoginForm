import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const BlueCheckbox = withStyles({
    root: {
      '&$checked': {
        color: '#2196F3',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);


export const Input = ({ input, meta, ...props }) => {
    return <TextField {...input} {...props} error = {meta.touched && meta.error && true} />
}

export const InputCheckbox = ({ input, meta, ...props }) => {
    return <FormControlLabel control={<BlueCheckbox {...input} {...props} value="remember" />} label="Запомнить меня" />
}




