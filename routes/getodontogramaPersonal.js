var express = require('express');
var router = express.Router();
var db = require('../db');

console.log("HHHHHHHHHHH");
router.get('/', function (req, res, next) {

    console.log("GGGGG ");

      db.request().execute("getodontogramaPersonal", (err, result) => {
          // ... error checks
          res.send(result);
        console.dir(result)
    });
        
});


module.exports = router;