"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { SearchView } from "./views/SearchView";
import { GridView } from "./views/GridView"

import UserService from "./services/UserService";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'UNODIS',
            routes: [
                { component: GridView, path: '/', exact: true},
                // { render: (props) => {
                //         if(UserService.isAuthenticated()) {
                //             return (<MovieFormView {... props} />)
                //         }
                //         else {
                //             return (<Redirect to={'/login'}/>)
                //         }} , path: '/edit/:id'},
                // { render: (props) => {
                //     if(UserService.isAuthenticated()) {
                //         return (<MovieFormView {... props} />)
                //     }
                //     else {
                //         return (<Redirect to={'/login'}/>)
                //     }}, path: '/add',},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: SearchView, path: '/search/:team_name'}
            ]
        };
    }

   componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>))}
                    </Switch>
                </Router>
            </div>
        );
    }
}

