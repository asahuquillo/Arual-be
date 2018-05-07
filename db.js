
var sql = require('mssql/msnodesqlv8');
var express = require('express');
var app = express();

console.log("hola1");
 
var port = process.env.port || 8080;

var config = require('./dbconfig.json') ;
console.log(config);

var db = sql.connect(config, function (err, res) {
    if (err) {
        throw err;
        console.log("Error "+err)
    } else {
        console.log("CONECTADO  A BBDD  " + db.threadId);
        // app.listen(port, function () {
        //     console.log("Puerto http://localhost: " + port);
        // });
    }
});

//db.query("SELECT * FROM Pacientes");
let dbs
module.exports = dbs={
    db:db,
    dbup:sql,
    config:config
};