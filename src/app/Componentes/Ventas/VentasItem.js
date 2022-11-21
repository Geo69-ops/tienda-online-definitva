// import { isTypeSystemDefinitionNode } from "graphql";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
// import DataVenta from "../../DataVenta";

export const VentasItem = ({
  // id,
  compra,
  // price,
  // stock,
  Comprador,
  Fecha,
  Total,
}) => {
  const value = useContext(DataContext);
  // const compraa = DataVenta.items.map((item) => {
  //   return item.compra;
  // });
  console.log("alla");
  console.log(compra);
  console.log("aqui");
  // let Compraaa = JSON.parse(Compra);
  // console.log(JSON.parse(Compra));
  //const addCarrito =value.addCarrito;
  return (
    <div className="venta">
      <div className="venta__footer">
        <h1> {Comprador} </h1>
        <p> {Fecha} </p>
        <div>
          Compra:
          <p> {compra} </p>
        </div>

        <p> {Total} </p>
        <p className="price">${Total}</p>
      </div>
    </div>
  );
};
