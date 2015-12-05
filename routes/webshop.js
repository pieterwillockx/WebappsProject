var express = require('express');
var router = express.Router();
var ShoppingCart = require('../models/shoppingcart.js');
var Item = require('../models/item.js');
var itemController = require('../controllers/item.js');

//API
router.get('/api/items/', itemController.getItems);


router.get('/', function(req, res){
	res.render('webshop', { user : req.user, title : 'Webwinkel'});
});

module.exports = router;