var express = require('express');
var router = express.Router();
var cars = require('../data/cars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cars });
});

// Post /cars (create a car)
router.post('/cars', function(req, res) {
  req.body.fullTank = true;
  cars.push(req.body);
  res.redirect('/');
})

// DELETE /cars/:idx
router.delete('/cars/:idx', function(req, res) {
  cars.splice(req.params.idx, 1)
  res.redirect('/')
})



module.exports = router;
