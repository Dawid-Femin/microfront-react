import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";
import Home from "./pages/Home";
import {createGenerateClassName} from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})
export default ({history}) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/' component={Home}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
};