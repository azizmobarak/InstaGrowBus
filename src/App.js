import React from 'react';
import Home from './components/Home';
import Login from './components/UserComponent/Login';
import Register from './components/UserComponent/Register';
import Dashbord from './components/UserComponent/Dashbord';
import {BrowserRouter, Route, Link,Switch} from "react-router-dom";
import Admin from './components/AdminComponent';

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/newaccount" component={Register}/>
    <Route path="/dashbord" component={Dashbord}/>
    <Route path="/admin" component={Admin}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
