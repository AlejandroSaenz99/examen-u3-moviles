const request =require('require');

const json ={
    "nombre": "Alejandro",
    "apellido": "Saenz",

};
request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function(error, response, body){
    console.log(body);
});