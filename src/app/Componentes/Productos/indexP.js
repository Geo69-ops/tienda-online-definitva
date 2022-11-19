import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const show11 = "hola";

export const ListaProductos = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [addProduct, setAddProduct] = value.addProduct;
  const { isAuthenticated } = useAuth0();

  // const toogleAddProducto1 = () => {
  //   setAddProduct(true);
  // };
  // const toogleAddProducto2 = () => {
  //   setAddProduct(false);
  // };

  // {
  //   isAuthenticated ? toogleAddProducto1() : toogleAddProducto2();
  // }

  // const show11 = addProduct ? "add" : "add show";
  // console.log(isAuthenticated);
  // console.log(show11);
  return (
    <>
      <h1 className="title"> PRODUCTOS </h1>

      {/* <Link to="/AddProducts">
        <h1 className={show11}> Añadir productos</h1>
      </Link> */}

      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            categoria={producto.categoria}
            stock={producto.stock}
            image={producto.image}
          />
        ))}
      </div>
    </>
  );
};
