import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Formulario = () => {
  const value = useContext(DataContext);
  const [productos, setProductos] = value.productos;

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
      {/* <form> */}
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
      <div>
        <label className="label">Clasificación</label>
        <select id="4" className="in">
          <option value="1"> Verdura</option>
          <option value="2"> Fruta</option>
        </select>
      </div>
      <div>
        <label className="label">Imagen</label>
        <input id="5" className="in" type="file" required />
      </div>

      <button className="btn" onClick={addproducto}>
        Enviar
      </button>
      {/* </form> */}
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
