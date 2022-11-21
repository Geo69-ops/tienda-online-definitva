import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { VentasItem } from "./VentasItem";

export const ListaVentas = () => {
  const value = useContext(DataContext);
  const [ventas] = value.ventas;

  return (
    <>
      <h1 className="title"> VENTAS </h1>
      <div className="ventas">
        {ventas.map((ventas) => (
          <VentasItem
            key={ventas.id}
            id={ventas.id}
            compra={ventas.Compra}
            price={ventas.price}
            stock={ventas.stock}
            Comprador={ventas.Comprador}
            Fecha={ventas.Fecha}
            Total={ventas.Total}
          />
        ))}
      </div>
    </>
  );
};
