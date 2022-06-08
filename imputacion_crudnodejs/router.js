const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAT TODOS LOS REGISTROS
<<<<<<< HEAD
router.get('/index', (req, res)=>{
=======
router.get('/', (req, res)=>{
>>>>>>> d402dc06a7051d772717363bc5b6d8e4510dab26

     conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).render('index', {results:results});
        }
    }); 
});

<<<<<<< HEAD
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

=======
>>>>>>> d402dc06a7051d772717363bc5b6d8e4510dab26
//RUTA PARA CREAR REGISTRO
router.get('/create', (req, res) => {
    res.render('create');
})

<<<<<<< HEAD
//RUTA PARA HOME
router.get('/home', (req, res) => {
    res.render('home');
})


=======
>>>>>>> d402dc06a7051d772717363bc5b6d8e4510dab26
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

//RUTA PARA ELIMINAR REGISTRO
router.get('/delete/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).redirect('/');
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;