import React from 'react'

export const NavGestionVentas = () => {
    return (
        <div>
            <div className="row cool-gray">

                <div className="col-3 pt-2">
                    <h2 className="text-center align-self-center">Gestion de Ventas</h2>
                </div>

                <div className="col-3 cool-gray align-self-center">
                    <input type="text" className="form-control  rounded-pill" placeholder="ID, Vendedor, Correo..."></input>
                </div>

                <div className="col-3 cool-gray text-left align-self-center">
                    <button className="btn btn-success">
                    <i class="fas fa-search"></i>
                    </button>
                </div>

                

                <div className="col-3 cool-gray text-center align-self-center">
                    <button className="btn btn-warning">
                        Filtrar
                    </button>
                </div>

            </div>
        </div>
    )
}
