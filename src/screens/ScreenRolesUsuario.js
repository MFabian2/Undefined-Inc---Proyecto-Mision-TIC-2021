import React from 'react'
import './ScreenRolesUsuario.css'

export function ScreenRolesUsuario() {
    const [rol, setRol] = React.useState("");
    const [usuario, setUsuario] = React.useState("");


    return (
        <div>
            <center className="title-principal">ROLES Y ESTADO DE USUARIO</center>
            <center>
                <div className="contenedor pt-5">
                    <p className="titlep">SELECCIONE UN ROL DE USUARIO</p>
                    <select className="custom-select"
                        onChange={(e) => {
                            const selectedRol = e.target.value;
                            setRol(selectedRol)
                        }}
                        placeholder="seleccione un rol">
                        <option value="Administrador">Admimistrador</option>
                        <option value="Vendedor">Vendedor</option>

                    </select>
                    <p className="rol"> Usted tiene el rol de:  <span className="span">{rol}</span>  </p>

                    <p className="titlep">SELECCIONE EL ESTADO DE USUARIO</p>
                    <select className="custom-select"
                        onChange={(e) => {
                            const selectedUser = e.target.value;
                            setUsuario(selectedUser)
                        }}
                        placeholder="seleccione un rol">
                        <option value="Pendiente">Pendiente</option>
                        <option value="Autorizado">Autorizado</option>
                        <option value="No-autorizado">No-autorizado</option>

                    </select>
                    <p className="rol">  Estado de usuario: <span className="span"> {usuario} </span> </p>

                    <button className="button-primary" >Guardar</button>
                </div>
            </center>
        </div>
    )
}
export default ScreenRolesUsuario;