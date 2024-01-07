import React from 'react';
import Marketing from "../components/Marketing";
import Header from "../components/Header";
import Auth from "../components/Auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})
export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/' component={Marketing}/>
                        <Auth/>
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};