var Item = require('../models/item.js');

exports.getItems = function(req, res){
	Item.find(function (err, items){
		if (err){
			res.send(err);
		} else {
			res.json({ data : items });
		}
	});
};