/*
=====================
Developed By Hitman
=====================
*/

import React from 'react'
import { EjemploProps } from './ej'

import './gestionVentas.css'

import { NavGestionVentas } from './NavGestionVentas'



export const GestionVentas = () => {
    return (

        <div>

            <NavGestionVentas />

            <br />

            <section className="container mt-4 bg-light">

                <div className="table-responsive">
                    <table className="table">
                        <thead className="cool-gray">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fecha</th>
                                <th scope="col text-center"> Editar
                                    <i className="fas fa-pencil-alt"></i>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">12345</th>
                                <td>IphoneX</td>
                                <td>Usuario </td>
                                <td>Enviado</td>
                                <td>19/12/21</td>
                                <td className="text-left">
                                    <button className="btn cobalt">
                                        <i className="fas fa-pencil-alt white-icon"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="alert alert-warning text-center" role="alert">
                        <i className="fas fa-exclamation-triangle fa-2x"></i>
                        <p>
                            Actualmente no existen ventas en curso
                        </p>
                    </div>

                    <div className="alert alert-light text-center" role="alert">
                    <i className="fas fa-sync fa-2x fa-spin"></i>
                    </div>
                </div>

            </section>
        </div>
    )
}
