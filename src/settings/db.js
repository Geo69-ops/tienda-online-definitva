const mongoose = require("mongoose");
const keys = require("./keys");
// const URI =
//   "mongodb+srv://holaMundo2:<holahola>@tiendaonline.wircwiy.mongodb.net/?retryWrites=true&w=majority";
// const URI = "mongodb://localhost:27017/tienda_verduras";
const URL =
  "mongodb://uy2vgsjfqr0qn1hpuroq:O5Vu6CKY0SfCpVCne51T@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bjpivqvau5jasd4?replicaSet=rs0";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log("DB is connected"))
  .catch((err) => console.log(err));
