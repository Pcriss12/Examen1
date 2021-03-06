var express = require('express');
var router = express.Router();
var propertiesController = require('./properties.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas

router.route('/propertiesPost')
  .post(function(req, res){
    propertiesController.save(req,res);
 });

router.route('/propertiesGet')
  .get(function(req, res){
      propertiesController.findAll(req,res);
 });

router.route('/propertiesUpdate')
  .put(function(req, res){
    propertiesController.update(req,res);
 });




// Se exporta el modulo
module.exports = router;