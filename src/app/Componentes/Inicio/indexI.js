import React from "react";
import portada from "../../images/portada.jpg";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1 className="title">Inicio</h1>
      </Link>
      <img src={portada} alt="inicio" width="1450" />
    </div>
  );
};
