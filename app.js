const { json } = require('express');
const express = require('express');
const app = express();
var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.listen(port, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});


