const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'bqrxf1uedlr8vrproou7-mysql.services.clever-cloud.com',
    user: 'us5xbnabsflib9g8',
    password: 'LVkRUaiNrUKyibTBIB1L',
    database: 'bqrxf1uedlr8vrproou7'
});

conexion.connect((error) =>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('Tu conexion a la BD MySQL se ha realizado con exito!');
})

module.exports = conexion;

