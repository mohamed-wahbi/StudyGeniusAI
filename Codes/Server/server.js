const express = require ("express");
const app = express();

const PORT = process.env.PORT || 4040
app.listen(4040,()=>console.log(`Server is connected on PORT = ${PORT}`))