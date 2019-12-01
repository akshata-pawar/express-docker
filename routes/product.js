var express=require("express")
var router = express();
var db = require('../db')

router.use(express.json());

router.get('/' , (request,response)=>{
    var connection = db.connect();
    var queryText="select * from product";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
          response.send(JSON.stringify(result));
        }else{
            response.send(JSON.stringify(err));

        }
    })
  
})

module.exports = router;