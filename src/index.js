const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const { log } = require("console");
const app = express();
// const { mongoose } = require("./settings/db");
// app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes
app.use("/api", require("./routes/app"));

//public
app.use(express.static(path.join(__dirname, "public")));
// console.log("chao");
// console.log(__dirname);
// console.log("hola");

app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});

// app.listen(4000, () => {
//   console.log("server on port 4000");
// });
