const { json } = require('express');
const express = require('express');
const app = express();
<<<<<<< HEAD
=======
const html = require('html');
>>>>>>> d402dc06a7051d772717363bc5b6d8e4510dab26

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});