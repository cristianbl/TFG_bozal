const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAT TODOS LOS REGISTROS
router.get('/', (req, res)=>{

     conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.status(200).render('index', {results:results});
        }
    }); 
});

//RUTA PARA CREAR REGISTRO
router.get('/create', (req, res) => {
    res.render('create');
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