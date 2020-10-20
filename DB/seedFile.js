const mongoose = require("./conn");
const Dog = require("../models/dog.js");

const Dogs = [
  { name: "spot", age: 5 },
  { name: "spot II", age: 5 },
  { name: "spot III", age: 5 },
  { name: "spot IV", age: 5 },
];

Dog.create(Dogs, (err, data) => {
  console.log(data);
  mongoose.connection.close();
});
