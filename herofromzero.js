const express =require('express');
const bp = require('body-parser');

const app = express() 

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
 
// parse application/json
app.use(bp.json())
let obj = {};
let params = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10,name: 'Tornado' }
];
app.use(function(req, res, next) {
  
 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/myherolist',function(req,res){

res.json(params);

});
app.get('/myherolist/getall',function(req,res){
console.log("in here")
res.json(params);

}); 

app.put('/myherolist/update', function (req, res) {
    
    console.log(req.body.id);
    console.log(req.body.name);
    for(i = 0;i < params.length;i ++)
    {
        if(params[i].id == req.body.id)
        {        
            params[i].name = req.body.name ;
            console.log(params[i]);
        }
     }
    

    res.json(params);
   
   
});
app.post('/myherolist/add', function (req, res){

 obj = {
      id : (params.length+1) , name : req.body.name
 }
params.push(obj);
console.log(params);
res.json(params);
 
 }); 
app.delete('/myherolist/:id', function (req, res){
console.log(req.params.id);
    for(i = 0;i < params.length;i ++)
    {
        if(params[i].id == req.params.id)
        {        
            params.splice(i, 1);
            console.log(params[i]);
        }
     }
  res.json(params);

})

app.listen(3000,function(){
console.log("done");	
})








