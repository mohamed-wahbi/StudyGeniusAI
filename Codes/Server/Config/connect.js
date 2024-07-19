const mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/StudyGenius')
.then(()=>console.log("Connection with DB *_*"))
.catch((err)=>console.log(err))

module.exports = mongoose