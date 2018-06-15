var mongojs = require('mongojs');

var databaseUrl = 'mongodb://essilor:test123@ds259620.mlab.com:59620/test1';
var collections = ['Book'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};