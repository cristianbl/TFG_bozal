const conexion = require('../database/db');

exports.save = (req, res)=>{
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    conexion.query('INSERT INTO users SET ?', {work:work, user:user, position:position, hours:hours}, (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/index');
        }
    })
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{work:work, user:user, position:position, hours:hours}, id], (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/index');
        }
    })
};




