const express = require("express");
const CroutesProductos = require("../controllers/route_productos");
const app = express.Router();

//listar productos
app.get("/Productos", CroutesProductos.listarProductos);

//buscar un prodcuto por nombre
app.get("/buscar/:id", CroutesProductos.buscar);

//Agregar
app.post("/addProductos", CroutesProductos.addProductos);

//Editar
// app.get("/editProductos", CroutesProductos.editProducto);
// app.post("/edit_Productos", CroutesProductos.editProducto);
app.put("/edit/:id", CroutesProductos.editarProductos);

//Eliminar
app.delete("/delete/:id", CroutesProductos.eliminarProductos);

// //Buscar una unica tarea
// app.get("/:id", async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// });

module.exports = app;
// app.get("/", function (req, res) {
//     res.send("hello world");
//   });
