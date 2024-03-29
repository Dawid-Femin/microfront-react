import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";
import {createGenerateClassName} from "@material-ui/core";
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';

const generateClassName = createGenerateClassName({
    productionPrefix: 'da',
});
export default ({history}) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/dashboard/posts' component={Posts}/>
                        <Route path='/dashboard' component={Dashboard}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
};