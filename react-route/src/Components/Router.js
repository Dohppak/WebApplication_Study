import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Notifications from "../Routes/Notification";

export default () => (
<Router>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/notifications" component={Notifications}/>
    </Switch>
</Router>

);