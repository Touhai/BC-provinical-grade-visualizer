const express = require('express');
// importing routes 
let apiRoutes = require("./api-routes");
//importing parser
let bodyParser = require("body-parser");
//importing mongoose
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()


const app = express();
const port = 3000;

const URI = process.env.DB_URI;


//enable CORS

app.use(cors());



app.get('/', (req, res) => {
  res.send("Server is up uwu!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api', apiRoutes);


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

let db = mongoose.connect(URI, { useNewUrlParser: true });
//  check for DB connection
if (!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")

