import React, { useState } from 'react';
//libraries
import { useFormik } from 'formik';
import * as yup from 'yup';
//Components
import Spinner from '../../components/spinner/Spinner';
import SnackbarToast from '../../components/snackbar/Snackbars';
//Services
import getAlkemyToken from '../../services/alkemy/alkemy-token';
//Assets
import logo from '../../assets/abstergo-logo.png';
//Material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Password should be of minimum 5 characters length')
        .required('Password is required'),
});

const LogInForm = (props) => {

    const [showSpinner, setShowSpinner] = useState(false);
    const [auth, setAuth] = useState(null)

    const classes = useStyles();

    async function uponSubmit(arg) {
        let response = await getAlkemyToken(arg);
        console.log(JSON.stringify(response))
        if (response.data) {
            setAuth(response.data.error);
            setTimeout(() => {
                setAuth(null)
            }, 3 * 1000);
        } else {
            console.log(response.token)
            localStorage.setItem('alkemyToken', JSON.stringify(response.token))
            //localStorage.removeItem('alkemyToken')
            props.history.push('/home')
        }
        setShowSpinner(false);
    }

    const formik = useFormik({
        initialValues: {
            email: 'Your email',
            password: 'your password',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setShowSpinner(true);
            // alert(JSON.stringify(values, null, 2));
            uponSubmit(values);
        },
    });

    return (
        <div className={classes.container}>
            {auth ? <SnackbarToast data={{ auth, severity: 'warning' }} /> : null}
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <div className={classes.imageContainer}><img src={logo} alt={''} className={classes.image} /></div>
                <TextField
                    className={classes.emailTextField}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className={classes.passwordTextField}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    fullWidth
                    type="submit"
                    className={classes.button}
                >
                    Log in
                </Button>
                <div className={classes.spinnerContainer}>{showSpinner ? <Spinner /> : null}</div>
            </form>
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        backgroundColor: '#212529',
        display: 'flex',
        flexDirection: 'column',
        width: 300, height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 0,
        margin: 0
    },
    form: {
        margin: 0,
        padding: 8,
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 50,
        paddingBottom: 8,
        marginTop: -30
    },
    emailTextField: {
        backgroundColor: 'white',
        marginBottom: 8,
        color: 'white',
        borderRadius: 5
    },
    passwordTextField: {
        backgroundColor: 'white',
        borderRadius: 5
    },
    button: {
        marginTop: 8,
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: 14,
        borderRadius: 0,
        border: 'white 1px solid'
    },
    spinnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -50,
        paddingBottom: -50,
        marginTop: 30
    }
});

export default LogInForm;