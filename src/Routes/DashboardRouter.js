import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Redirect, Route } from 'react-router'
import { GestionVentas } from '../components/gestion_ventas/GestionVentas'

/*
En este componente se importan todas las rutas de la aplicacion y se añaden
Como ruta dentro de las etiquetas Route como estan las demas con su
respectivo componente
*/ 

export const DashboardRouter = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/ventas" component={GestionVentas} />
                    <Redirect to="/ventas"/>
                </Switch>

            </div>
        </>
    )
}
