const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Daniel:1234@cluster-projetox.ji0s94j.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed to connect');
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model('collecton1', LogInSchema);

module.exports = collection;