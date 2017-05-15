/**
 * Created by Mitaka on 09-May-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema ({
    lat : {
        type: Number
    },
    long : {
        type : Number
    }
}, {timestamps : true});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;