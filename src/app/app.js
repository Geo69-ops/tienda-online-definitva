import "./App.css";
import "boxicons";
import DataProvider from "./context/Dataprovider";
// import DataContext from ".context/Dataprovider.js";
import React, { useContext, useState } from "react";
import helloWorld from "../public/images/180f710d36f927e5f41e.jpg";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { LoginButton } from "../app/Login/LoginButton";
import { LogoutButton } from "../app/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListaProductos from "./Componentes/Productos/indexP";
import { Inicio } from "./Componentes/Inicio/indexI";
import { Carrito } from "./Componentes/Carrito/indexC";
import { ProductoDetalles } from "./Componentes/Productos/ProductoDetalles";
import { ListaVentas } from "./Componentes/Ventas/indexV";
import { Profile } from "./Componentes/Login/Profile";
import { Formulario } from "./Componentes/Productos/Formulario";

function App() {
  // const value = useContext(DataContext);
  // const [menu, setMenu] = value.menu;
  // const [carrito] = value.carrito;

  // const toogleMenu = () => {
  //   setMenu(!menu);
  // };

  const { user } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <nav className="light-blue darken-4">
        <ul className="header">
          <li>
            <div className="logo">
              <img src={helloWorld} alt="logo" width="100" />
            </div>
          </li>

          {isAuthenticated ? (
            <li>
              <img src={user.picture} width="50" />
            </li>
          ) : (
            <li></li>
          )}

          {isAuthenticated ? (
            <li>
              <LogoutButton />
            </li>
          ) : (
            <li>
              <LoginButton />
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <a href="/Profile"> PERFIL </a>
            </li>
          ) : (
            <li></li>
          )}

          {isAuthenticated ? (
            <li>
              <a href="/Ventas"> VENTAS </a>
            </li>
          ) : (
            <li></li>
          )}

          {isAuthenticated ? (
            <li>
              <a href="/AddProducts"> Añadir productos </a>
            </li>
          ) : (
            <li></li>
          )}

          <li>
            <a href="/Productos"> PRODUCTOS </a>
          </li>

          <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item__total">carrito</span>
          </div>
        </ul>
      </nav>

      <div className=""></div>
    </div>
  );
}

export default App;

// import React, { Component, Fragment } from "react";
// import { render } from "react-dom";

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Hello care vergas</h1>
//         <p> Aqui otra vaina y otra y otra </p>
//       </Fragment>
//     );
//   }
// }

// export default App;
