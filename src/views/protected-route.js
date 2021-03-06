import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.alkemyToken) {
                    // console.log(localStorage.alkemyToken)
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    )
}