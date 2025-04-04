const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require('dotenv');
const mySqlPool = require("./Config/db");

// Configure dotenv
dotenv.config();

// rest object

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1/student', require("./routes/studentRoutes"))

app.get("/test", (req, res) => {
  res.status(200).send("node js is running on server ");
});

// port
const PORT = process.env.PORT || 8080;

// Contidionaly listen

mySqlPool.query('SELECT 1').then( ()=>{

  //Mysql

  console.log('MYSQL DB is Connected'.bgCyan.white);
  
// listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`.bgMagenta.white);
});
}).catch((error)=>{
  console.log(error)
})



