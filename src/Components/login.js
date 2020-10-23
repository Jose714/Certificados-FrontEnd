import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import UserI from "./UI";

const Login = () => {
        return (<Router>
            <form>
                <img className="image" src="https://www.unac.edu.co/wp-content/uploads/2020/06/UNAC.png" alt="Submit" width="300" height="100"></img>

                <h3 className="signIn">Sign In</h3>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Correo Electronico" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <Link to={'/solcert'}>
                    <button type="submit"  className="button">Iniciar Sesion</button>
                </Link>             
            </form>
            <Route path="/solcert" component={UserI}/>
        </Router>
        );
    }

    export default Login;
