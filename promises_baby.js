var express = require('express');
var app = express();
const async = require('async');

 

app.get('/', async function(req, res) {
   console.log("hellohai");
  
      setTimeout(function(){
           console.log("hello");
       }, 5000); 
   
   console.log("hi");
   
});


app.listen(3000, function() {
        console.log("running on 3000");
    });
