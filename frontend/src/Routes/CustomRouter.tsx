import React from 'react'
import { Redirect,Route} from 'react-router-dom';

export function CustomRoute({ isPrivate = false, ...rest }){

    if (isPrivate) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}