const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productosSchema = new Schema({
  title: {
    type: String,
    require: [true, "Nombre del producto es obligatorio"],
    unique: true,
  },
  price: {
    type: Decimal128,
    require: [true, "Precio del producto es obligatorio"],
  },
  image: {
    type: String,
    require: [true, "Ruta de la imagen del producto es obligatorio"],
  },
  category: {
    type: String,
    require: [true, "Categoria del producto es obligatorio"],
  },
  stock: {
    type: Decimal128,
    require: [true, "Stock del producto es obligatorio"],
  },
  cantidad: { type: Decimal128, require: [false] },
});

// const frutasModel = mongoose.model("Frutas", productosSchema);

// module.exports = frutasModel;

module.exports = mongoose.model("Productos", productosSchema);
