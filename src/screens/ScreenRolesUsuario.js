import React from 'react'
import Select from 'react-select'
import './ScreenRolesUsuario.css'

export function ScreenRolesUsuario(){
    const [rol, setRol] = React.useState("");
    const [usuario, setUsuario] = React.useState("");


    return(
        <div className="container pt-5">
            <p>Seleccione un rol de usuario</p>
            <select className="custom-select"
            onChange={(e)=>{
                const selectedRol = e.target.value;
                setRol(selectedRol)
            }}
            placeholder="seleccione un rol">
                <option value="Administrador">Admimistrador</option>
                <option value="Vendedor">Vendedor</option>

            </select>
           <p> Usted tiene el rol de:  {rol} </p>

            <p>Estado de usuario</p>
            <select className="custom-select"
            onChange={(e)=>{
                const selectedUser = e.target.value;
                setUsuario(selectedUser)
            }}
            placeholder="seleccione un rol">
                <option value="Pendiente">Pendiente</option>
                <option value="Autorizado">Autorizado</option>
                <option value="No-autorizado">No-autorizado</option>

            </select>
          <p>  Estado de usuario:  {usuario} </p>

          <button className="button-primary" >Guardar</button>
        </div>
    )
}
export default ScreenRolesUsuario;