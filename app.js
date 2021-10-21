const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()

// importing routes
const apiRoutes = require("./routes/api-routes");

// starting App
const app = express();
const port = 3000;
const URI = process.env.DB_URI;


//enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send("Server is up!");
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

