import React from "react";
import { Provider } from "react-redux";//passes store into all other comps
import { HashRouter } from "react-router-dom"; //for front end routes
import App from "./app"; //hold all the other comps and this root will hold app

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);


export default Root;