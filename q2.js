var exp = require('express');
var mysql = require('mysql2');
var bp = require('body-parser');

var app = exp();


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Suraj@1999",
	database: "users"
});

con.connect(function(err){
	if(!err)
		console.log("connected to database user")
})


app.use(exp.static('Files'));   
app.use(bp.urlencoded({extended: false})); 

app.listen(9005,function(){
	console.log("exam server started......... ");
})

app.get('/username',function(req,res){
	
	res.sendFile(__dirname+"/Q2nd.html");
});

app.post('/getdetails',function(req,res){
	var s = "select "+req.body.username+" from user ";
	con.query(s,function(err,result){
		if(!err)
			res.send(JSON.stringify(result));
	});	
});


app.all('*',function(req,res){
	res.send("Invlaid URL !!!");
});
