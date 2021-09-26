import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router'
import { GestionVentas } from '../components/gestion_ventas/GestionVentas'

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/ventas" component={GestionVentas}/>
            </Switch>

        </div>
    )
}
