const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.json({
        pruebas: "simon - si jalo el pipeline"});
});

app.listen(8080, function(req,res){
    console.log("Server is running at por 8080")
})