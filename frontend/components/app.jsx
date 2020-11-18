import React from "react";
import {Route} from 'react-router-dom';
import MainNav from "./nav/main_nav_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";
import Splash from "./splash/splash_container";
import AuthRoute from '../util/route_util';

const App = () => {
    return (<div>
        <h1>say hello!</h1>
        <MainNav />
        <Route path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />

    </div>)
};

export default App;