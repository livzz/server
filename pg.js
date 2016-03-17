// get dependencies
var app = require('express')();
// var Sequelize = require('sequelize');
var pg = require('pg');
var port = process.env.PORT || 3000;
var con = "postgres://wmjhesbhficdss:8h-sUiXhXMXy4qn0ts8ZPrBfGt@ec2-54-83-56-177.compute-1.amazonaws.com:5432/d82ef6b58k6279";
 
// sequelize initialization
//var seq = new Sequelize("postgres://wmjhesbhficdss:8h-sUiXhXMXy4qn0ts8ZPrBfGt@ec2-54-83-56-177.compute-1.amazonaws.com:5432/d82ef6b58k6279");
 
// check database connection
// sequelize.authenticate().complete( function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });
var test;
app.get("/",function(req,res)
{
	pg.connect(con, function(err, client, done) {
  	if(err) {
    		return console.error('error fetching client from pool', err);
  		}
  		else
  			res.send('Success!!');
	});
});

app.get("/create",function(req,res){

	pg.connect(conString, function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * from tests', function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }
	    console.log(result);
	    //output: 1
  		});
	});
});

app.get('/show',function(req,res)
	{
		// seq.sync().then( function()
		// 	{
		// 		res.send(test.findAll());
		// 		console.log(test);
		// 	});
	});
// initializing a port
app.listen(port);