const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const conexion = require('./database/db');

//MOSTRAT TODOS LAS IMPUTACIONES
router.get('/compute', (req, res)=>{

     conexion.query('SELECT * FROM users WHERE absence IS NULL', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).render('compute', {results:results});
        }
    }); 
});

//MOSTRAT TODOS LAS AUSENCIAS
router.get('/absenceview', (req, res)=>{

    conexion.query('SELECT * FROM users WHERE absence IS NOT NULL', (error, results)=>{
       if(error){
           throw error;
       } else {
           res.status(200).render('absenceview', {results:results});
       }
   }); 
});

//MOSTRAT TODOS LAS AUSENCIAS RRHH
router.get('/absenceviewrrhh', (req, res)=>{

    conexion.query('SELECT * FROM users WHERE absence IS NOT NULL', (error, results)=>{
       if(error){
           throw error;
       } else {
           res.status(200).render('absenceviewrrhh', {results:results});
       }
   }); 
});

//MOSTRAT TODOS LOS REGISTROS
router.get('/fullview', (req, res)=>{

    conexion.query('SELECT * FROM users WHERE absence IS NULL', (error, results)=>{
       if(error){
           throw error;
       } else {
           res.status(200).render('fullview', {results:results});
       }
   }); 
});


//MOSTRAT TODOS LOS REGISTROS RRHH
router.get('/fullviewrrhh', (req, res)=>{

    conexion.query('SELECT * FROM users WHERE absence IS NULL', (error, results)=>{
       if(error){
           throw error;
       } else {
           res.status(200).render('fullviewrrhh', {results:results});
       }
   }); 
});

//MOSTRAR REGISTRO ESPECIFICO
router.get('/indexview/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('indexview', {user:results[0]});
        }
    })
});

//MOSTRAR REGISTRO ESPECIFICO
router.get('/indexviewadmin/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('indexviewadmin', {user:results[0]});
        }
    })
});

//MOSTRAR REGISTRO ESPECIFICO
router.get('/absenceviewadmin/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('absenceviewadmin', {user:results[0]});
        }
    })
});

//RUTA PARA CREAR REGISTRO
router.get('/create', (req, res) => {
    res.render('create');
})

//RUTA PARA HOME
router.get('/', (req, res) => {
    res.render('index');
})

//RUTA PARA ABOUT
router.get('/about', (req, res) => {
    res.render('about');
})

//RUTA PARA ADMIN MODE
router.get('/adminmode', (req, res) => {
    res.render('adminmode');
})


//RUTA PARA EDITAR REGISTRO

router.get('/edit/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('edit', {user:results[0]});
        }
    })
})

//RUTA PARA EDITAR REGISTRO RRHH

router.get('/editrrhh/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('editrrhh', {user:results[0]});
        }
    })
})

//RUTA PARA EDITAR AUSENCIA RRHH

router.get('/editabsence/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('editabsence', {user:results[0]});
        }
    })
})

//RUTA PARA CREAR AUSENCIA

router.get('/absence/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results) =>{
        if(error){
            throw error;
        } else {
            res.status(200).render('absence', {user:results[0]});
        }
    })
})


//RUTA PARA ELIMINAR REGISTRO
router.get('/delete/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).redirect('/compute');
        }
    })
})

//RUTA PARA ELIMINAR REGISTRO RRHH
router.get('/deleterrhh/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).redirect('/absenceviewrrhh');
        }
    })
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var rol = req.body.rol;
    conexion.query('SELECT * FROM login_users WHERE user_name = ? AND pass = ? AND rol = ?',[username,password,rol],function(error,results,fields){
        if (results.length > 0) { 
            res.redirect("/adminmode");
        } else {
            res.redirect("/login");
        }
        res.end();
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);
router.post('/updaterrhh', crud.updaterrhh);
router.post('/updateabsence', crud.updateabsence);
router.post('/report', crud.report);

module.exports = router;