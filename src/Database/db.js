const mysql = require("mysql");

const mysqlCone=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'alandeyani',
    database:'Estudiantes'
});

mysqlCone.connect(function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log("Estas conectado");
    }
});

module.exports = mysqlCone;