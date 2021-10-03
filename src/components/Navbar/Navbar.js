import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark blue-black">


                <Link className="navbar-brand" to="/">Undefined INC</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/home">
                            Home
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/ventas">
                            Ventas
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/roles">
                            Roles
                        </NavLink>

                    </div>
                </div>

            </nav>
        </>
    )
}
