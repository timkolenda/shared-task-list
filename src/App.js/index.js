import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from '../history';
import Header from '../components/Header';
import ListPage from '../pages/ListPage';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}



export default App;