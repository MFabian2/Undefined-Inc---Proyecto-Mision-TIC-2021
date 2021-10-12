import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardRouter } from './DashboardRouter';
import { Login } from '../login/Login';
import { Footer } from '../components/Footer/Footer';

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path='/' component={DashboardRouter} />
                </Switch>
            </div>

            < Footer />

        </Router>
    )
}
