import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

// private section params 

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // add spinner 
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            // for user location 
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;