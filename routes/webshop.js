var express = require('express');
var router = express.Router();
var ShoppingCart = require('../models/shoppingcart.js');
var Item = require('../models/item.js');
var itemController = require('../controllers/item.js');
var accountController = require('../controllers/account.js');

//API
router.get('/api/items/', itemController.getItems);
router.get('/api/shoppingcart/', accountController.getShoppingCart);
router.post('/api/shoppingcart/', accountController.addToShoppingCart);


router.get('/', function(req, res){
	res.render('webshop', { user : req.user, title : 'Webwinkel'});
});

module.exports = router;