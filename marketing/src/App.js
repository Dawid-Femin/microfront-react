import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import {createGenerateClassName} from "@material-ui/core";
import AboutUs from "./components/AboutUs";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})
export default ({history}) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/pricing' component={Pricing}/>
                        <Route exact path='/about' component={AboutUs}/>
                        <Route path='/' component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
};