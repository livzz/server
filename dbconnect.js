var express    = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jecdb'
});
var app = express();

connection.connect(function(err){

if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}

});

app.get("/",function(req,res){
connection.query('SELECT * from studentinfo', function(err, rows, fields) {
// connection.end();
  if (!err)
  	{
    	console.log('The solution is: ', rows);
		console.log(rows.name);
	}
  else
    console.log('Error while performing Query.');
  });
	
});

app.get("/help",function(req,res)
	{
		res.send("help page!!");
	});

app.listen(3000);