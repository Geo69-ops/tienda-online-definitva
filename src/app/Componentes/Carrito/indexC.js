import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const cancelarCompra = value.cancelarCompra;

  const tooglefalse = () => {
    setMenu(false);
  };
  const AddVentas = value.AddVentas;
  const removeProducto = value.removeProducto;

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
        item.stock += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
        item.stock -= 1;
        console.log(item.cantidad);
      }
      setCarrito([...carrito]);
    });
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  // const removeProducto = (id) => {
  //   if (window.confirm("¿Quiere eliminar el producto?")) {
  //     carrito.forEach((item, index) => {
  //       if (item.id === id) {
  //         item.cantidad = 1;
  //         carrito.splice(index, 1);
  //       }
  //     });
  //     setCarrito([...carrito]);
  //   }
  // };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"> </box-icon>
        </div>
        <div className="carrito__cancel" onClick={cancelarCompra}>
          <box-icon name="log-out-circle"></box-icon>
        </div>

        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              {" "}
              Carrito vacio{" "}
            </h2>
          ) : (
            <>
              {carrito.map((producto) => (
                <div className="carrito__item">
                  <img src={producto.image} alt="" />
                  <div className="span">
                    <br />
                    <span>{producto.stock}</span>
                    <h3>{producto.title}</h3>
                    <p className="price">${producto.price}</p>
                  </div>

                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => suma(producto.id)}
                    >
                      {" "}
                    </box-icon>
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => resta(producto.id)}
                    >
                      {" "}
                    </box-icon>
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => removeProducto(producto.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="carrito__footer">
          <h3> total: ${total} </h3>
          <button className="btn" onClick={() => AddVentas()}>
            Realizar compra
          </button>
        </div>
      </div>
    </div>
  );
};
