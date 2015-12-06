var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', { user : req.user, title: "Sportzorg.be | Bart Willockx" });
});

module.exports = router;
