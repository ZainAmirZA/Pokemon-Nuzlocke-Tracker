var express = require('express');
var router = express.Router();

let nuzlockesCtrl = require('../controllers/nuzlockes');
const Nuzlocke = require('../models/nuzlocke');


/* GET home page. */
router.get('/', function(req, res, next) {
  Nuzlocke.find({}, function(err, nuzlockes) {

    res.render('index', {nuzlockes });
  })
});

// router.get('/', function(req, res) {
//   res.redirect('/home')
// })
// router.get('/home', )

module.exports = router;
