// get dependencies
var app = require('express')();
var Sequelize = require('sequelize');
var port = process.env.PORT || 3000;

 
// sequelize initialization
var seq = new Sequelize("postgres://wmjhesbhficdss:8h-sUiXhXMXy4qn0ts8ZPrBfGt@ec2-54-83-56-177.compute-1.amazonaws.com:5432/d82ef6b58k6279");
 
// check database connection
// sequelize.authenticate().complete( function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });
// app.get("/",function(req,res)
// {
// 	res.send("Hello");
// });

app.get("/create",function(req,res){

seq.sync({force:true}).then( function()
{
	console.log("Yoyo its working!!");


	var test = seq.define('test',{
		user: Sequelize.STRING,
		pass: Sequelize.INTEGER
	});

	test.create(
		{	
			user:'hello',
			pass:'12345'
		})
	.then(function(test)
		{
			res.send(test);
		});
	});
});
// initializing a port
app.listen(port);