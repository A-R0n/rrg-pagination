require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const app = express();

// Require functions from main controller
const {
  getRoutes
} = require("./Controllers/mainCtrl");

const port = process.env.SERVER_PORT || 3333;

app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

  process.on('uncaughtException', function (err) {
    console.log(err);
}); 

// Endpoints
app.get(`/api/routes`, getRoutes);

app.listen(port, () => {
  console.log(`Listing on port: ${port}`);
});
