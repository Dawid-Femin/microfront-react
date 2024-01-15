import React, {lazy, Suspense, useState} from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LinearProgress, createGenerateClassName, StylesProvider} from "@material-ui/core";

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});
export default () => {
    const [isSingIn, setIsSignIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignIn(false)} isSignedIn={isSingIn}/>
                    <Suspense fallback={<LinearProgress/>}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignIn(true)}/>
                            </Route>
                            <Route path='/' component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};