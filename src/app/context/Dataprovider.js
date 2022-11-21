import React, { useState, useEffect, createContext } from "react";
// import Data from "../Data.js";
// import DataVenta from "../DataVenta.js";
import { useAuth0 } from "@auth0/auth0-react";
// import { empty } from "@apollo/client";
export const DataContext = createContext();
let Fecha = new Date();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [ventas, setVentas] = useState([]);
  const [modal, setModal] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const [addProduct, setAddProduct] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  const cancelarCompra = () => {
    const eliminar = carrito.map((item3) => {
      return item3.id;
    });
    for (var i = 0; i < eliminar.length; i++) {
      removeProducto(eliminar[i]);
    }
  };

  const removeProducto = (id) => {
    carrito.forEach((item, index) => {
      if (item.id === id) {
        item.cantidad = 1;
        carrito.splice(index, 1);
      }
    });
    setCarrito([...carrito]);
  };

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya se ha añadido al carrito");
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  /* AddVentas */
  // useEffect(() => {
  //   const ventas = DataVenta.items;
  //   if (ventas) {
  //     setVentas(ventas);
  //   } else {
  //     setVentas([]);
  //   }
  // }, []);

  const AddVentas = () => {
    // console.log(ventas);
    //mapear el carrito
    if (window.confirm(`Confirme su compra por un total de: $ ${total}`)) {
      const agregar = carrito.map((item2) => {
        return item2;
      });
      console.log(agregar);
      //
      // verificar numero de ID
      const Uid = ventas.map((venta) => {
        return venta.id;
      });
      const tamaño = Uid.length;

      //CONSTRUIR OBJETO
      const Fventa = {
        id: tamaño + 1,
        Comprador: user.name,
        Compra: agregar,
        Total: total,
        Fecha: Fecha.toDateString(),
      };
      // console.log(Fventa);
      // console.log(ventas);
      // AGREGAR A VENTAS
      if (agregar) {
        ventas.push(Fventa);
        // setVentas([...ventas, ...agregar]);
      } else if (agregar === NaN) {
        alert("no hay nada para agregar");
      }
      //eliminar productos del carrito
      const eliminar = carrito.map((item3) => {
        return item3.id;
      });
      for (var i = 0; i < eliminar.length; i++) {
        removeProducto(eliminar[i]);
      }
    }
  };
  useEffect(() => {
    const dataVentas = JSON.parse(localStorage.getItem("dataVentas"));
    if (dataVentas) {
      setVentas(dataVentas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataVentas", JSON.stringify(ventas));
  }, [ventas]);

  /* AddVentas */

  /* Addproducto */
  // useEffect(() => {
  //   const producto = Data.items;
  //   if (producto) {
  //     setProductos(producto);
  //   } else {
  //     setProductos([]);
  //   }
  // }, []);

  // const addProductos = (title) => {
  //   const check2 = productos.every((item) => {
  //     return item.title !== title;
  //   });
  //   if (check2) {
  //     setProductos([...productos, ...data2]);
  //   } else {
  //     alert("El producto ya se ha añadido a la lista de productos");
  //   }
  // };

  // useEffect(() => {
  //   const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
  //   if (dataCarrito) {
  //     setCarrito(dataCarrito);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  // }, [carrito]);

  /* Addproducto */

  /* información del usuario */
  // useEffect(() => {
  //   const dataUsuario = JSON.parse(localStorage.getItem("dataUser"));
  //   if (dataUsuario) {
  //     setUsuario(dataUsuario);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dataUser", JSON.stringify(user));
  // }, [user]);

  /*   Información del ususario */

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const value = {
    productos: [productos, setProductos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
    ventas: [ventas],
    modal: [modal, setModal],
    addProduct: [addProduct, setAddProduct],
    AddVentas: AddVentas,
    removeProducto: removeProducto,
    cancelarCompra: cancelarCompra,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
