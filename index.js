var express = require ('express');
var app = express();

app.get('/', function(req, res){
    res.send('Lo estas haciendo bien bro');
});

app.listen(3000, function(){
    console.log('aplicacion ejemplo, escuchando el puerto 3000!');
});