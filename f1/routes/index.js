var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


function a () {
    MongoClient.connect('mongodb://192.168.0.7:27017/test', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('stats2017').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    });
}


/* GET home page. */
router.get('/', function(req, res, next) {
  a();
  res.render('index', { title: 'Express' });
});

module.exports = router;
