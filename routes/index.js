var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.writeHead(200, {'ContentType' : 'text/html'});
    res.end('<h2>This is Way Track Application REST API</h2>' +
        '<h3>End points:</h3>' +
        '<ul>' +
        '<li>/locations [GET, POST, DELETE] - returns all the records in ascending order sorted by time of creation</li>' +
        '<li>/locations/last [GET] - returns the very last record</li>' +
        '<li>/locations/last-10-minutes [GET] - returns last 10 records in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-30-minutes [GET] - returns last 30 records in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-1-hour [GET] - returns every 5th record in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-2-hour [GET] - returns every 10th record in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-6-hour [GET] - returns every 15th record in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-12-hour [GET] - returns every 30th record in ascending order sorted by time of creation</li>' +
        '<li>/locations/last-24-hour [GET] - returns every 60th record in ascending order sorted by time of creation</li>' +
        '<li>/locations/:locationId [GET, PUT, DELETE] - returns a single record</li>' +
        '</ul>');
});

module.exports = router;
