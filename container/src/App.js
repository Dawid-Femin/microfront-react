import React, {lazy, Suspense} from 'react';
import Header from "../components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

const MarketingLazy = lazy(() => import('../components/Marketing'));
const AuthLazy = lazy(() => import('../components/Auth'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});
export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path='/auth' component={AuthLazy}/>
                            <Route path='/' component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};