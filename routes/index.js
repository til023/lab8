var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = {'showAlternate' : false}
  	res.render('index', projects);
};


exports.viewGrid = function(req, res){
	var grid = {'showAlternate' : true}
	res.render('index', ("grid: true"));
};