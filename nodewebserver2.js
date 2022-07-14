var h = require('http');

h.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	if(req.url == '/')
	{
 		res.write("<h1> welcome to Web Server</h1>");
	}
	else if(req.url == '/home')
	{
		res.write("<p> Hello from Home Page </p>");
	}
	else
	{
		res.write("<p> Hello .... </p>");
	}
	res.end();

}).listen(9000,function(){ console.log("server up on 9000")});