require("dotenv").config();
const express = require ("express");
const app = express();
//connecting with DB :
require('./Config/connect.js')

const cors = require('cors');



//middlwears :
app.use(cors())
app.use(express.json());




const PORT = process.env.PORT 
app.listen(4040,()=>console.log(`Server is connected on PORT : ${PORT}`))