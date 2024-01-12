import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";
import {createGenerateClassName} from "@material-ui/core";
import Dash from './components/Dash';

const generateClassName = createGenerateClassName({
    productionPrefix: 'da',
});
export default ({history, onSignIn}) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/dashboard'>
                            <Dash />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
};