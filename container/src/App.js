import React from 'react';
import Marketing from "../components/Marketing";
import Header from "../components/Header";
import {BrowserRouter} from "react-router-dom";
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
                </div>
                <Marketing/>
            </StylesProvider>
        </BrowserRouter>
    )
};