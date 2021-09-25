import React from 'react'
import './gestionVentas.css'

export const GestionVentas = () => {
    return (
        <div>
            <div className="row">

                <div className="col-3 bg-success pt-3 ">
                    <h2>Gestion de Ventas</h2>
                </div>

                <div className="col-3 bg-warning p-3">
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-1 bg-primary p-3 text-center">
                    <button className="btn btn-success">
                        busqueda
                    </button>
                </div>

                <div className="col-3 bg-secondary p-3"></div>

                <div className="col-2 bg-success pt-3 text-center">
                    <button className="btn btn-warning">
                        Filtrar
                    </button>
                </div>

            </div>

            <section className="container mt-4 bg-light">

                <div>
                    <h1>
                        Seccion principal
                    </h1>

                </div>

            </section>
        </div>
    )
}
