/*
======================
Developed By Hitman
======================
*/

import React from 'react'

export const NavGestionVentas = () => {
    return (

        <div className="row cool-gray navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="col pt-2 nav-item">
                    <h4 className="text-center align-self-center">Ventas</h4>
                </div>

                <div className="col cool-gray align-self-center nav-item">
                    <input type="text" className="form-control  rounded-pill" placeholder="ID, Vendedor, Correo..."></input>
                </div>

                <div className="col cool-gray text-left align-self-center nav-item">
                    <button className="btn btn-success">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                <div class="col dropdown nav-item">
                    <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        filtar
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Fecha</a></li>
                        <li><a class="dropdown-item" href="#">Vendedor</a></li>
                        
                    </ul>
                </div>



            </div>
        </div>
    )
}
