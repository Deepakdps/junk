const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
let Todo  = new Schema({
	productId: Number,
    productName: String,
    productCode: String,
    releaseDate: String,
    description: String,
    price : Number,
    starRating: Number,
    imageUrl: String
});
var todoinfo = mongoose.model('debras',Todo);

mongoose.connect('mongodb://localhost:5555/tutorial-todo');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/prodlist',function(req,res){

todoinfo.find((err,result) =>{
console.log('find');
if(err)
{
console.log(err)	}
else
{console.log(result)
 res.send(result);
}




});

});

app.listen(3000,function(){
	console.log(":) running on 3000")




});





