var AsteriskManager = require('asterisk-manager');
var Q = require('q');
var connectionPool = require('./lib/connection-pool');
var eventsListener = require('./lib/events-listener');
var actions = require('./lib/actions');

module.exports = function(options){
	return new AsteriskManagerPool(options);
};

function AsteriskManagerPool(options){
	options.port = options.port || 5038;
	options.host = options.host || '127.0.0.1';
	
	function connectionFactory(sendEvents){
		return new AsteriskManager(options.port, options.host, options.username, options.password, sendEvents);
	}
	
	this._pool = connectionPool(connectionFactory, options.maxPoolSize || 4);
	this._events = eventsListener(connectionFactory);
}

var proto = AsteriskManagerPool.prototype;

proto.action = function(action, entryEvent, endEvent){
	var deferred = Q.defer();
	var pool = this._pool;
	pool.take(function(err, connection){
		if(err){
			return deferred.reject(err);
		}
		if(entryEvent && endEvent){
			var results = [];
			function onEntry(event){
				results.push(event);
			}
			function onEnd(event){
				connection.removeListener(entryEvent, onEntry);
				pool.release(connection);
				deferred.resolve(results);
			}
			connection.on(entryEvent, onEntry);
			connection.once(endEvent, onEnd);
			connection.action(action, function(err, result){
				if(err){
					connection.removeListener(entryEvent, onEntry);
					connection.removeListener(endEvent, onEnd);
					deferred.reject(err.message ? new Error(err.message) : err);
				}
			});
		}else{
			connection.action(action, function(err, result){
				pool.release(connection);
				if(err){
					deferred.reject(err.message ? new Error(err.message) : err);
				}else{
					deferred.resolve(result);
				}
			});
		}
	});
	return deferred.promise;
};

proto.on = function(eventName, listener){
	this._events.on(eventName, listener);
};
proto.once = function(eventName, listener){
	this._events.on(eventName, listener);
};
proto.removeListener = function(eventName, listener){
	this._events.removeListener(eventName, listener);
};
proto.removeAllListeners = function(eventName){
	this._events.removeAllListeners(eventName);
};

for(var method in actions){
	proto[method] = actions[method];
}
