var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();

var bodyParser = require('body-parser')

app.use( bodyParser.json() );       

app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use(express.static(__dirname));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});


app.listen(port);
console.log('Server started',port)