var settings = require('../settings');
var Db = require('mongodb').Db;
var connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

//获取连接的实例
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));
