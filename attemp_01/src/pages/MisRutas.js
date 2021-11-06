import React from "react";
import {Route, Switch} from 'react-router-dom'
import Store from './Store'
import About from './About'
import ListCart from "./ListCart";

export default function MisRoutes(){
    return(
        <Switch>
             <Route exact path='/' component = {Store}/>
             <Route exact path='/About' component = {About}/>
             <Route exact path='/ListCart' component ={ListCart}/>
        </Switch>
    );
}