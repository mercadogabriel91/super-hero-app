import React from 'react';

//Material ui 
import { makeStyles } from '@material-ui/core/styles';

//Local imports
import LogInForm from './components/LogInForm';

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <LogInForm />
        </div>
    )
}

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh'
    },
});