import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& a': {
            color: '#2196F3',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#E10050',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        '& label.Mui-focused': {
            color: '#2196F3',
        },
        '& label.Mui-error': {
            color: '#E10050',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#2196F3',
            },
            '&.Mui-error fieldset': {
                borderColor: '#E10050',
                borderWidth: 2,
            },
        },
        '& .Mui-error': {
            '&.Mui-focused fieldset': {
                borderColor: '#E10050 !important',
            },
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#2196F3',
        color: '#fff',
        '&:hover': {
            background: '#2F80ED',
        },
    }
}));

export default useStyles;