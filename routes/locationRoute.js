/**
 * Created by Mitaka on 09-May-17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Locations = require('../models/locations');
var locationRouter = express.Router();

locationRouter.use(bodyParser.json());

locationRouter.route('/')

    .all(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Credentials', false);
        res.header('Access-Control-Max-Age', '86400');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

        next();
    })

    .options(function (req, res, next) {
        res.send(200);
    })

    .get(function (req, res, next) {

        // Locations.find({}, function (err, location) {
        //     if (err) throw err;
        //
        //     res.json(location);
        //  });

        Locations.find().sort({'createdAt' : 'asc'}).exec( function (err, location) {
            if (err) throw err;

            res.json(location);
        });
    })

    .post(function (req, res, next) {

        Locations.create(req.body, function (err, location) {
            if (err) throw err;

            var id = location._id;
            res.end('Successfully added location with id: ' + id);
        })
    })

    .delete(function (req, res, next) {

        Locations.remove({}, function (err, resp) {
            if (err) throw err;

            res.json(resp);
        });
    })
;

locationRouter.route('/last')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'desc'}).limit(1).exec(function (err, result) {
            if (err) next(err);

            res.json(result);
        });
    })
;

locationRouter.route('/last-10-minutes')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(10).exec(function (err, result) {
            if (err) next(err);

            res.json(result);
        });
    })
;

locationRouter.route('/last-30-minutes')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(30).exec(function (err, result) {
            if (err) next(err);

            res.json(result);
        });
    })
;

locationRouter.route('/last-1-hour')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(60).exec(function (err, result) {
            if (err) next(err);

            var times = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 5 === 0) {
                    times.push(result[i]);
                }
            }

            res.json(times);
        });
    })
;

locationRouter.route('/last-2-hours')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(120).exec(function (err, result) {
            if (err) next(err);

            var times = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 10 === 0) {
                    times.push(result[i]);
                }
            }

            res.json(times);
        });
    })
;

locationRouter.route('/last-6-hours')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(360).exec(function (err, result) {
            if (err) next(err);

            var times = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 15 === 0) {
                    times.push(result[i]);
                }
            }

            res.json(times);
        });
    })
;

locationRouter.route('/last-12-hours')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(720).exec(function (err, result) {
            if (err) next(err);

            var times = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 30 === 0) {
                    times.push(result[i]);
                }
            }

            res.json(times);
        });
    })
;

locationRouter.route('/last-24-hours')

    .get(function (req, res, next) {

        Locations.find({}).sort({'createdAt' : 'asc'}).limit(1440).exec(function (err, result) {
            if (err) next(err);

            var times = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 60 === 0) {
                    times.push(result[i]);
                }
            }

            res.json(times);
        });
    })
;

locationRouter.route('/:locationId')

    .all(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Credentials', false);
        res.header('Access-Control-Max-Age', '86400');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

        next();
    })

    .options(function (req, res, next) {
        res.send(200);
    })

    .get(function (req, res, next) {

        Locations.findById(req.params.locationId, function (err, location) {
            if (err) throw err;

            res.json(location);
        });
    })

    .put(function (req, res, next) {

        Locations.findByIdAndUpdate(
            req.params.locationId,
            {$set : req.body},
            {new : true},
            function (err, location) {
                if (err) throw err;

                res.json(location);
        });
    })

    .delete(function (req, res, next) {

        Locations.findByIdAndRemove(req.params.locationId, function (err, resp) {
            if (err) throw err;

            res.json(resp);
        });
    })
;


module.exports = locationRouter;