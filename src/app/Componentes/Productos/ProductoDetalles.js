import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [Productos] = value.productos;
  const [detalle, setDetalle] = useState([]);

  const params = useParams();

  useEffect(() => {
    Productos.forEach((producto) => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, Productos]);

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <p className="nuevo"> nuevo </p>
            <div className="size">
              <select placeholder="Tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button>Añadir al carrito</button>
          <img src={detalle.image.default} alt={detalle.title} />
          <input type="range" min="1" max="36" />
          <div className="description">
            <p>
              <b>Description:</b> Lorem ipsu dolor sit amet consctetut
              adipisicing elit. Saepe magnam corrupti, mostias rem ea coporir,
              nesciunt ipsam consequatur hic alias accusamus, vere susciít culpa
              ñobero eveniet sint fugiat deserunt.
            </p>
          </div>
        </div>
      }
    </>
  );
};
