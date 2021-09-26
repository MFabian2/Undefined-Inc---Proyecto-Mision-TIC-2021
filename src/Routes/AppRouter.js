import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Switch>
                    {/* <Route exact path="/login" component={Login} /> */}

                    <Route path="/" component={DashboardRouter}/>
                </Switch>
            </div>

        </Router>
    )
}
