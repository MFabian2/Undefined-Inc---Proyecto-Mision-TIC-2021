import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GestionVentas } from '../components/gestion_ventas/GestionVentas';
import { NavGestionVentas } from '../components/gestion_ventas/NavGestionVentas';
import { DashboardRouter } from './DashboardRouter';
import { ComponenteEjemplo } from '../App'

/*
=============================
Este componente no se toca
=============================

*/ 

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Switch>
                    {/* Cuando se integre el login
                     se importa el componente y se reemplaza por el de ejemplo */}
                    <Route exact path="/login" component={ComponenteEjemplo} />
                    <Route path='/' component={DashboardRouter} />
                </Switch>
            </div>

        </Router>
    )
}
