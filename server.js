var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/spects";
mongoose.connect('mongodb://tejaswini:tejaswini1@ds159100.mlab.com:59100/spects');


var Spects = mongoose.model('spects', mongoose.Schema({
	brand:{
        type: String,
        required: true
    },
	id:{
        type: String,
        required: true
    },
	range:{
        type: Number,
        required: true
    },
	gender:{
        type: String,
        required: true
    },
	phno:{
        type: Number,
        required: true
    }
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/spects', function(req, res){
	Spects.find(function(err, spects){
		if(err)
			res.send(err);
		res.json(spects);
	});
});

app.get('/api/spects/:id', function(req, res){
	Spects.findOne({_id:req.params.id}, function(err, spect){
		if(err)
			res.send(err);
		res.json(spect);
	});
});
app.post('/api/spects', function(req, res){
	Spects.create( req.body, function(err, spect){
		if(err)
			res.send(err);
		res.json(spect);
	});
});

app.delete('/api/spects/:id', function(req, res){
	Spects.findOneAndRemove({_id:req.params.id}, function(err, spect){
		if(err)
			res.send(err);
		res.json(spect);
	});
});
app.put('/api/spects/:id', function(req, res){
	var query = {
		brand:req.body.brand,
		id:req.body.id,
		range:req.body.range,
		gender:req.body.gender,
		phno:req.body.phno
	};
	Spects.findOneAndUpdate({_id:req.params.id}, query, function(err, spect){
		if(err)
			res.send(err);
		res.json(spect);
	});
});
app.listen(process.env.PORT||3000, function(){
	console.log('server is running on port 3000..');
});
