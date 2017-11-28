var express = require('express');
var app = express();
const async = require('async');

 
function settime(){
  return new Promise(function (resolve,reject) {


     setTimeout(function(){
           resolve("hello");
       }, 5000); 
    });

}


app.get('/', async function(req, res) {
   console.log("hellohai");
  let disp = await settime();
   console.log(disp);
   console.log("hi");
   
});


app.listen(3000, function() {
        console.log("running on 3000");
    });
