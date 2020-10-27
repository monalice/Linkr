import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { UserProvider } from '../contexts/UserContext';

import Main from '../pages/Main'
import TimeLine from '../pages/TimeLine';
 
export default function App(){

    return(
        <UserProvider>
            <Router>
                <Switch>
                    <Route path='/timeline'>
                        <TimeLine  />
                    </Route>
                    <Route path='/'>
                        <Main  />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    );
}