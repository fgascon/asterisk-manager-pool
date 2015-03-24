
module.exports = function(createConnection){
	
	var events;
	function getEvents(){
		if(!events){
			events = createConnection(true);
		}
		return events;
	}
	
	return {
		on: function(eventName, listener){
			getEvents().on(eventName, listener);
		},
		once: function(eventName, handler){
			getEvents().once(eventName, listener);
		},
		removeListener: function(eventName, listener){
			if(events){
				events.removeListener(eventName, listener);
			}
		},
		removeAllListeners: function(eventName){
			if(events){
				events.removeAllListeners(eventName);
			}
		}
	};
};