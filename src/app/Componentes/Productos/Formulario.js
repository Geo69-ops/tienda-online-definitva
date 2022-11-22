import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";
// const Productos = require("../models/productos.model");
import DataTable from "react-data-table-component";
import { model } from "mongoose";

const columnas = [
  { name: "id", selector: "_id", sortable: true },
  { name: "title", selector: "title", sortable: true },
  { name: "price", selector: "price", sortable: true },
  { name: "image", selector: "image", sortable: true },
  { name: "category", selector: "category", sortable: true },
  { name: "stock", selector: "stock", sortable: true },
  { name: "cantidad", selector: "cantidad", sortable: true },
  { name: "__v", selector: "__v", sortable: true },
];

// const tabla = [
//   {
//     _id: 1,
//     title: "yuca",
//     image: "jkss",
//     category: "verdura",
//     price: 3543,
//     stock: 4223,
//     cantidad: 1,
//     __v: 0,
//   },
//   {
//     _id: 2,
//     title: "papa",
//     image: "jajdj",
//     price: 3543,
//     category: "verdura",
//     stock: 4223,
//     cantidad: 1,
//     __v: 0,
//   },
// ];
export const Formulario = () => {
  const value = useContext(DataContext);

  const [productos, setProductos] = value.productos;
  // const tabla = productos;
  // console.log("Aqui van los productos");
  // console.log(productos);
  // console.log(tabla);

  const tabla = productos;

  const borrar = () => {
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
  };

  const borrar2 = () => {
    document.getElementById("8").value = "";
    document.getElementById("9").value = "";
    document.getElementById("10").value = "";
    document.getElementById("11").value = "";
  };
  // console.log("Aqui van otra vezzz los productos");
  // console.log(productos);
  // console.log(tabla);
  const editarProducto = async () => {
    const idEdit = document.getElementById("6").value;
    console.log(idEdit);

    const url = `http://localhost:4000/api/buscar/${idEdit}`;
    const parameters = {
      method: "GET",
      mode: "no-cors",
    };

    const response = await fetch(url, parameters);
    const daata = await response.json();
    const producto = daata.modelo;
    console.log(producto);
    console.log(daata);
    const prod = producto.title;
    const prec = producto.price;
    const stoc = producto.stock;
    const clas = producto.category;
    // const imag = producto.image;

    document.getElementById("8").value = prod;
    document.getElementById("9").value = prec;
    document.getElementById("10").value = stoc;
    document.getElementById("11").value = clas;
    // window.scrollToDown();
    // document.getElementById("5").value = img;

    // console.log(response);
    // console.log("Hola desde showDB");
    // console.log(daata.model);

    // console.log("hola desde el useEffect de GET");

    // console.log("va el get de productos");
    // console.log(productos);

    // .then((response) => response.json())
    // .then((data) => console.log(data));
  };

  const addproducto = () => {
    // const check = productos.every((item) => {
    //   return item.title !== title;
    // });
    // if (check) {
    /// aquí la función para añadir productos
    // verificar numero de ID
    const Uid = productos.map((producto) => {
      return producto.id;
    });
    const tamaño = Uid.length;
    console.log(tamaño);
    console.log(Uid);
    //     //CONSTRUIR OBJETO
    const prod = document.getElementById("1").value;
    const prec = document.getElementById("2").value;
    const cant = document.getElementById("3").value;
    const clas = document.getElementById("4").value;
    const imag = document.getElementById("5").value;

    // console.log(prod);
    // console.log(prec);
    // console.log(cant);
    // console.log(clas);
    console.log(imag);

    const Fproducto = {
      id: tamaño + 1,
      title: prod,
      price: prec,
      image: `require${imag}`,
      category: clas,
      stock: cant,
      cantidad: 1,
    };
    // AGREGAR A PRODUCTOS
    // } else {
    //   alert("El producto ya se ha añadido a la lista de productos");
    // }
    productos.push(Fproducto);
    alert("Producto creado");
    document.getElementById("1").value = " ";
    document.getElementById("2").value = " ";
    document.getElementById("3").value = " ";
    // document.getElementById("4").textContent = " ";
    document.getElementById("5").value = " ";
  };

  // useEffect(() => {
  //   const dataProductos = JSON.parse(localStorage.getItem("dataProductos"));
  //   if (dataProductos) {
  //     setProductos(dataProductos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dataProductos", JSON.stringify(productos));
  // }, [productos]);

  return (
    <div className="productos">
      <h1 className="title"> Formulario de ingreso de productos </h1>
      <form>
        <div>
          <label className="label">Producto</label>
          <input id="1" className="in" type="text" required autoFocus />
        </div>

        <div>
          <label className="label">Precio</label>
          <input id="2" className="in" type="text" required />
        </div>
        <div>
          <label className="label">|Stock|</label>
          <input id="3" className="in" type="text" required />
        </div>

        <br />
        <br />

        <div>
          <label className="label">Clasificación</label>
          <input id="4" className="in" type="text" required />

          {/* <select id="4" className="in">
            <option value="1"> Verdura</option>
            <option value="2"> Fruta</option>
          </select> */}
        </div>

        <br />
        <br />

        <div>
          <label className="label">Imagen</label>
          <input id="5" className="in" type="file" required />
        </div>

        <br />
        <br />

        <button className="btn" onClick={addproducto}>
          Enviar
        </button>
        <button className="btn" onClick={borrar}>
          Cancelar
        </button>
      </form>
      <hr />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <h2 className="label">Editar por id</h2>
        <input id="6" className="in" type="text" required />
        <button className="btn" onClick={editarProducto}>
          Buscar ID para actualizar
        </button>
      </div>

      <br />
      <form>
        <div>
          <label className="label">Nombre del producto</label>
          <input id="8" className="in" type="text" required autoFocus />
        </div>

        <div>
          <label className="label">Precio del producto</label>
          <input id="9" className="in" type="text" required />
        </div>
        <div>
          <label className="label">|Stock en venta|</label>
          <input id="10" className="in" type="text" required />
        </div>

        <br />
        <br />

        <div>
          <label className="label">Clasificación del producto</label>
          <input id="11" className="in" type="text" required />

          {/* <select id="4" className="in">
            <option value="1"> Verdura</option>
            <option value="2"> Fruta</option>
          </select> */}
        </div>

        <br />
        <br />

        <div>
          <label className="label">Imagen</label>
          <input id="5" className="in" type="file" required />
        </div>

        <br />
        <br />

        <button className="btn" onClick={editarProducto}>
          Editar el producto
        </button>
        <button className="btn" onClick={borrar2}>
          Cancelar
        </button>
      </form>

      <br />
      <br />
      <br />

      <div>
        <h2 className="label">Eliminar por id</h2>
        <input id="7" className="in" type="text" required />
        <button className="btn" color="red">
          Eliminar{" "}
        </button>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="tabla"></div>
      <div>
        <DataTable columns={columnas} data={tabla} title="Productos" />
      </div>
    </div>
  );
};

// export function AddProducts() {
//   const [nombre, setNombre] = useState();

//   return (
//     <>
//       <h2>Formulario de entreda de productos</h2>
//       <form>
//         <label type="text" id="nombre">
//           Nombre del producto{" "}
//         </label>
//         <input placeholder="Yuca" />

//         <label type="text" id="precio">
//           Precio
//         </label>
//         <input placeholder="Yuca" />

//         <label type="text" id="cantidad">
//           Cantidad{" "}
//         </label>
//         <input placeholder="Yuca" />

//         <div className="">
//           <button type="button">cancelar</button>
//           <button type="submit">Añadir</button>
//         </div>
//       </form>
//     </>
//   );
// }
