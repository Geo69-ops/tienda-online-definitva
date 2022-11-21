import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const ProductoItem = ({ id, title, price, categoria, stock, image }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const productos = value.productos;

  return (
    <div className="producto">
      <Link to={`/producto/${id}`}>
        <br />
        <div className="producto__img">
          <img src={image} alt={title} width="150" />
          <div>Stock (Kg)</div>
          <span className="span">{stock + 1}</span>
        </div>
      </Link>
      <div className="producto__footer">
        <h1> {title} </h1>
        <p> {categoria} </p>
        <p className="price">${price}</p>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addCarrito(id)}>
          {" "}
          Añadir al carrito
        </button>
        <div>
          <Link to={`/Productos/${id}`} className="btn">
            vista
          </Link>
        </div>
      </div>
    </div>
  );
};
