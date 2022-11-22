import "./App.css";
import "boxicons";
import { DataProvider } from "./context/Dataprovider";
// import DataContext from ".context/Dataprovider.js";
import React, { useContext, useState } from "react";
import helloWorld from "../public/images/180f710d36f927e5f41e.jpg";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { LoginButton } from "../app/Login/LoginButton";
import { LogoutButton } from "../app/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./Componentes/Header/indexH";
import { ListaProductos } from "./Componentes/Productos/indexP";
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
      <DataProvider>
        <div>
          <Router>
            <Header />
            <Routes>
              {/* <Carrito /> */}
              <Route path="/" element={<Inicio />} />
              <Route path="/Productos" element={<ListaProductos />} />
              <Route path="/Productos/${id}" element={<ProductoDetalles />} />
              <Route path="/Ventas" element={<ListaVentas />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/AddProducts" element={<Formulario />} />
            </Routes>
          </Router>
        </div>
      </DataProvider>
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

//SIRVE:_______
