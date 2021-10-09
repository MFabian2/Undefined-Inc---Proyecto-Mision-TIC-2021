/*
=================================
Developed by Diego Martinez
=================================
*/

import React from 'react'
import './actualizacion_venta.css'
import { NavGestionVentas } from '../NavGestionVentas'
import { Container } from 'react-bootstrap'
export const ActualizacionVenta = () => {
    return (
      <div>

            <section className = "container">
                <h1 className = "text-center"> NOBRE PRODUCTO VENDIDO</h1>

                <div class="row">
                    <div class="col">
                        <label><h5>Identificador</h5></label>
                        <input name = "Identificador" type="text" class="form-control" placeholder="ID" />
                    </div>
                    <div class="col">
                    <label><h5>Precio venta</h5></label>
                        <input name= "PrecioVenta" type="text" class="form-control" placeholder="$00000 COP" />
                    </div>
                    <div class="col">
                    <label><h5>Estado venta</h5></label><br/>
                        <select class="form-select"> <option>VENDIDO</option><option>CANCELADO</option><option>RECHAZADO</option><option>SEPARADO</option><option>DESPACHADO</option> </select>
                    </div>
                </div>

                <br />

                <div class="row">
                <label><h5>COMPRADOR</h5></label><br/>
                    <div class="col"><label><h5>Nombres</h5></label><br/>
                        <input type="text" class="form-control" placeholder="First name"  />
                    </div>
                    <div class="col">
                    <label><h5>Apellidos</h5></label><br/>
                        <input type="text" class="form-control" placeholder="Last name"  />
                    </div>
                    <div class="col">
                    <label><h5>Identificación</h5></label><br/>
                        <input type="text" class="form-control" placeholder="Identificación"  />
                    </div>
                </div><br/>
                <div class="row">
                    <div class="col"><label><h5>Correo</h5></label><br/>
                        <input type="text" class="form-control" placeholder="mail@mail.mail"  />
                    </div>
                    <div class="col">
                    <label><h5>Telefono</h5></label><br/>
                        <input type="text" class="form-control" placeholder="300000000" />
                    </div>
                    <div class="col">
                    <label><h5>Dirección</h5></label><br/>
                        <input type="text" class="form-control" placeholder="Dirección" />
                    </div>
                </div><br/>
                <div class="row">
                <label><h5>VENDEDOR</h5></label><br/>
                    <div class="col"><label><h5>Nombre Completo</h5></label><br/>
                        <input type="text" class="form-control" placeholder="Full name"  />
                    </div>
                    <div class="col">
                    <label><h5>Identificación</h5></label><br/>
                        <input type="text" class="form-control" placeholder="Identificación"  />
                    </div>
                    
                </div><br/>
                <div class="row">
                    <div class="col text-center">
                    <button class="btn btn-danger" >Eliminar</button></div>
                    <div class="col text-center">
                    <button class="btn btn-success">Actualizar</button></div>
                </div>

            </section>
        </div>
    )
}