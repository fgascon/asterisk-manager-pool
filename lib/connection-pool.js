var Pool = require('common-pool');

module.exports = function(createConnection, maxPoolSize){
	return Pool(function(callback){
		var connection = createConnection(true);
		/*connection.on('managerevent', function(event){
			console.log(event);
		});*/
		callback(null, connection);
	}, function(connection){
		connection.disconnect();
	}, maxPoolSize, 3600 * 1000, 10000);
};