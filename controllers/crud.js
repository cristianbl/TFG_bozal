const conexion = require('../database/db');

exports.save = (req, res)=>{
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    const joined = req.body.joined;
    conexion.query('INSERT INTO users SET ?', {work:work, user:user, position:position, hours:hours, joined:joined}, (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/compute');
        }
    })
};

exports.report = (req, res)=>{
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    const joined = req.body.joined;
    const absence = req.body.absence;
    conexion.query('INSERT INTO users SET ?', {work:work, user:user, position:position, hours:hours, joined:joined, absence:absence}, (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/compute');
        }
    })
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    const joined = req.body.joined;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{work:work, user:user, position:position, hours:hours, joined:joined}, id], (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/compute');
        }
    })
};

exports.updaterrhh = (req, res)=>{
    const id = req.body.id;
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    const joined = req.body.joined;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{work:work, user:user, position:position, hours:hours, joined:joined}, id], (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/fullviewrrhh');
        }
    })
};

exports.updateabsence = (req, res)=>{
    const id = req.body.id;
    const work = req.body.work;
    const user = req.body.user;
    const position = req.body.position;
    const hours = req.body.hours;
    const joined = req.body.joined;
    const absence = req.body.absence;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{work:work, user:user, position:position, hours:hours, joined:joined, absence:absence}, id], (error, results)=>{
        if(error){
            console.log(error);
        } else {
            res.redirect('/absenceviewrrhh');
        }
    })
};




