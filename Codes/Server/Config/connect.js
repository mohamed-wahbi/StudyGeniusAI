require("dotenv").config();
const mongoose = require ('mongoose');
mongoose.connect(process.env.DBURL)
.then(()=>console.log("Connection with DB *_*"))
.catch((err)=>console.log(err))

module.exports = mongoose