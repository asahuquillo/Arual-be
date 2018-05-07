var express = require('express');
var router = express.Router();
var dbs = require('../db');

console.log("HHHHHHHHHHH");
router.post('/', function (req, res, next) {
    console.log("GGGGG " ,req.body);
async ()=>{
    // @paciente_id	int,
	// @diente			varchar(2),
    // @patologia_id	int    
   let pool= await dbs.dbup.connect(dbs.config);
   let result=await pool.request()      
      .input('paciente_id', sql.Int, req.body.paciente)
      .input('diente', sql.VarChar (2), req.body.diente)
      .input('patologia_id', sql.Int, req.body.patologia)
      .execute("addLineasDeDiagnostico") 
    }   
});


module.exports = router;