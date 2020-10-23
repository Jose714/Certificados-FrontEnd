import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../Components/login.js";

const HomeNavBar = () => {
    return(<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h3 className="navbar-brand" >Admisiones - Solicitudes de Certificados</h3>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
            <Route exact path='/' component={Login} />
        </div>
      </div>
    </div></Router>
  );
}

export default HomeNavBar;