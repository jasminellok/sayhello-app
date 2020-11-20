import React from "react";
//import {Route, withRouter} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainNav from "./nav/main_nav_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";
import SplashContainer from "./splash/splash_container";
import BoardIndexContainer from "./boards/board_index_container";
import BoardShowContainer from "./boards/board_show_container";

const App = () => {
    return (<div>
        <MainNav/>
        <ProtectedRoute path="/boards" component={BoardIndexContainer} />
        <ProtectedRoute path="/boards/boardId" component={BoardShowContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>)
};

export default App;