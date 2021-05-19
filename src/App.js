import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//Material ui 
import { makeStyles } from '@material-ui/core/styles';

//Local imports
import LogInForm from './views/LogIn/LogInForm';
import Home from './views/Home/Home';
import { ProtectedRoute } from './views/protected-route';
import WrongPath from './views/404/WrongPath';

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={LogInForm} />
                    <ProtectedRoute exact path="/home" component={Home} />
                    <Route path="*" component={WrongPath} />
                </Switch>
            </HashRouter>
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