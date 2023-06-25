var express = require('express');
var router = express.Router();
const collection = require('../mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const listar = async()=>{
    try{
        const data = await collection.find({}, {_id:0, email: 0, password:0, __v:0}).sort({name:1});
        let lis_objetcs = JSON.parse(JSON.stringify(data));
        let list_names = [];
        for(let i = 0; i < lis_objetcs.length; i++){
          list_names.push(JSON.parse(JSON.stringify(data))[i].name);
          // console.log(list_names[i])
        }
        console.log(list_names);
        
      }catch{
        console.log("error");
      }
    }
  res.render('amigos');
});

module.exports = router;