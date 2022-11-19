const HOST =
  "rs0/n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017";
const DB = "bjpivqvau5jasd4";
const USER = "uy2vgsjfqr0qn1hpuroq";
const PORT = "27017";
const PSS = "O5Vu6CKY0SfCpVCne51T";

module.exports = {
  database: [`mongodb://${USER}:${PSS}@${HOST}:${DB}`],
};
