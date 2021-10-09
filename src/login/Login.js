/*
=================================
Developed by Diego Martinez
=================================
*/
import React from 'react'
import "./stylelogin.css"

export const Login = ({ history }) => {

    const login = () => {
        history.replace('/')
    }


    return (
        <div>
            <header>
                <main class="topper">
                    <h1>CONTROL INVENTARIO Y GESTION DE VENTAS</h1>
                </main>
            </header>

            <main class="container_1">
                <aside class="container__item--sidebar ">

                    <form class="login">
                        <p class="title">
                            <h1>Log in</h1>
                        </p>
                        <input class="input" type="text" placeholder="Username" autofocus />
                        <br /><br />
                        <input class="input" type="password" placeholder="Password" />
                        <br /><br />
                        <a href="#">Forgot your password?</a>
                        <button class="btn text-light cobalt" onClick={login}>Log in</button>
                    </form>
                </aside>

                <aside class="container_item--content">
                    <a>
                    </a>
                </aside>
            </main>

        </div>
    )
}
