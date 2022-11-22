import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const ProductoItem = ({ id, title, price, categoria, stock, image }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const [productos, setProductos] = value.productos;

  const stockk = parseInt(stock);
  console.log("Hola desde el parse del stock");
  console.log(stockk);
  console.log(stock);
  return (
    <div className="producto">
      <br />
      <div className="producto__img">
        {/* <img src={image} alt={title} width="150" /> */}
        <div>Stock (Kg)</div>
        <span className="span">{stock}</span>
      </div>

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
          <button className="btn">vista</button>
        </div>
      </div>
    </div>
  );
};
