var express = require('express');
var router = express.Router();
var dbs = require('../db');

console.log("HHHHHHHHHHH");
router.get('/', function (req, res, next) {

    console.log("GGGGG ");

      dbs.db.request().execute("get_pacientes", (err, result) => {
          // ... error checks
          res.send(result);
        console.dir(result)
    });
        
});


module.exports = router;