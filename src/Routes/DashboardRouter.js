import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { GestionVentas } from '../components/gestion_ventas/GestionVentas'
import { Navbar } from '../components/Navbar/Navbar'
import {ScreenRolesUsuario} from '../screens/ScreenRolesUsuario'

/*
En este componente se importan todas las rutas de la aplicacion y se añaden
Como ruta dentro de las etiquetas Route como estan las demas con su
respectivo componente
*/ 

export const DashboardRouter = () => {
    return (
        <>
        <Navbar />
            <div>
                <Switch>
                    <Route exact path="/ventas" component={GestionVentas} />
                    <Route exact path='/roles' component={ScreenRolesUsuario} />  
                    <Redirect to="/roles"/>
                </Switch>

            </div>
        </>
    )
}
