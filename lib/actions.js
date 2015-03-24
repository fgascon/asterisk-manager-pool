
module.exports = {
		AbsoluteTimeout: function(channel, timeout){
		return this.action({
			action: 'AbsoluteTimeout',
			channel: channel,
			timeout: timeout
		});
	},
	AGI: function(channel, command, commandID){
		return this.action({
			action: 'AGI',
			channel: channel,
			command: command,
			commandID: commandID
		});
	},
	Atxfer: function(channel, destination){
		return this.action({
			action: 'Atxfer',
			channel: channel,
			context: destination[0],
			exten: destination[1] || 's',
			priority: destination[2] || 1
		});
	},
	Bridge: function(channel1, channel2, tone){
		return this.action({
			action: 'Bridge',
			channel1: channel1,
			channel2: channel2
		});
	},
	Challenge: function(authType){
		return this.action({
			action: 'Challenge',
			authType: authType||'md5'
		});
	},
	Command: function(command){
		return this.action({
			action: 'Command',
			command: command
		});
	},
	CoreSettings: function(){
		return this.action({
			action: 'CoreSettings'
		});
	},
	CoreShowChannels: function(){
		return this.action({
			action: 'CoreShowChannels'
		}, 'coreshowchannel', 'coreshowchannelscomplete');
	},
	CoreStatus: function(){
		return this.action({
			action: 'CoreStatus'
		});
	},
	CreateConfig: function(filename){
		return this.action({
			action: 'CreateConfig',
			filename: filename
		});
	},
	DataGet: function(path, search, filter){
		return this.action({
			action: 'DataGet',
			path: path,
			search: search,
			filter: filter
		});
	},
	DBDel: function(family, key){
		return this.action({
			action: 'DBDel',
			family: family,
			key: key
		});
	},
	DBDelTree: function(family, key){
		return this.action({
			action: 'DBDelTree',
			family: family,
			key: key
		});
	},
	DBGet: function(family, key){
		return this.action({
			action: 'DBGet',
			family: family,
			key: key
		}, 'dbgetresponse', 'dbgetcomplete').get(0).get('val');
	},
	DBPut: function(family, key, val){
		return this.action({
			action: 'DBPut',
			family: family,
			key: key,
			val: val
		});
	},
	ExtensionState: function(exten, context){
		return this.action({
			action: 'ExtensionState',
			exten: exten,
			context: context||'default'
		});
	},
	GetConfig: function(filename, category){
		return this.action({
			action: 'GetConfig',
			filename: filename,
			category: category
		});
	},
	GetConfigJSON: function(filename){
		return this.action({
			action: 'GetConfigJSON',
			filename: filename
		});
	},
	Getvar: function(channel, variable){
		return this.action({
			action: 'Getvar',
			channel: channel,
			variable: variable
		});
	},
	Hangup: function(channel, cause){
		return this.action({
			action: 'Hangup',
			channel: channel,
			cause: cause
		});
	},
	IAXnetstats: function(){
		return this.action({
			action: 'IAXnetstats'
		});
	},
	IAXpeerlist: function(){
		return this.action({
			action: 'IAXpeerlist'
		}, 'peerentry', 'peerlistcomplete');
	},
	IAXpeers: function(){
		return this.action({
			action: 'IAXpeers'
		}, 'peerentry', 'peerlistcomplete');
	},
	IAXregistry: function(){
		return this.action({
			action: 'IAXregistry'
		}, 'registryentry', 'registrationscomplete');
	},
	JabberSend: function(jabber, jid, message){
		return this.action({
			action: 'JabberSend',
			jabber: jabber,
			jid: jid,
			message: message
		});
	},
	ListCategories: function(filename){
		return this.action({
			action: 'ListCategories',
			filename: filename
		});
	},
	ListCommands: function(){
		return this.action({
			action: 'ListCommands'
		});
	},
	LocalOptimizeAway: function(channel){
		return this.action({
			action: 'LocalOptimizeAway',
			channel: channel
		});
	},
	MailboxCount: function(mailbox){
		return this.action({
			action: 'MailboxCount',
			mailbox: mailbox
		});
	},
	MailboxStatus: function(mailbox){
		return this.action({
			action: 'MailboxStatus',
			mailbox: mailbox
		});
	},
	MeetmeList: function(conference){
		return this.action({
			action: 'MeetmeList',
			conference: conference
		}, 'meetmelist', 'meetmelistcomplete');
	},
	MeetmeMute: function(meetme, usernum){
		return this.action({
			action: 'MeetmeMute',
			meetme: meetme,
			usernum: usernum
		});
	},
	MeetmeUnmute: function(meetme, usernum){
		return this.action({
			action: 'MeetmeUnmute',
			meetme: meetme,
			usernum: usernum
		});
	},
	MixMonitorMute: function(channel, direction, state){
		return this.action({
			action: 'MixMonitorMute',
			channel: channel,
			direction: direction,
			state: state ? '1' : '0'
		});
	},
	ModuleCheck: function(module){
		return this.action({
			action: 'ModuleCheck',
			module: module
		});
	},
	ModuleLoad: function(module, loadType){
		return this.action({
			action: 'ModuleLoad',
			module: module,
			loadType: loadType
		});
	},
	Monitor: function(channel, file, format, mix){
		return this.action({
			action: 'Monitor',
			channel: channel,
			file: file,
			format: format || 'wav',
			mix: mix ? '1' : '0'
		});
	},
	OriginateExtension: function(channel, destination, options){
		options = options || {};
		options.action = 'Originate';
		options.channel = channel;
		options.context = destination[0];
		options.extension = destination[1] || 's';
		options.priority = destination[2] || 1;
		return this.action(options);
	},
	OriginateApplication: function(channel, application, data, options){
		options = options || {};
		options.action = 'Originate';
		options.channel = channel;
		options.application = application;
		options.data = data || '';
		return this.action(options);
	},
	Park: function(channel, parkinglot, timeout, channel2){
		return this.action({
			action: 'Park',
			channel: channel,
			parkinglot: parkinglot,
			timeout: timeout,
			channel2: channel2
		});
	},
	ParkedCalls: function(){
		return this.action({
			action: 'ParkedCalls'
		}, 'parkedcall', 'parkedcallscomplete');
	},
	PauseMonitor: function(channel){
		return this.action({
			action: 'PauseMonitor',
			channel: channel
		});
	},
	PlayDTMF: function(channel, digit){
		return this.action({
			action: 'PlayDTMF',
			channel: channel,
			digit: digit
		});
	},
	QueueAdd: function(queue, interf, paused, memberName, stateInterface){
		return this.action({
			action: 'QueueAdd',
			queue: queue,
			'interface': interf,
			paused: paused ? '1' : '0',
			memberName: memberName,
			stateInterface: stateInterface
		});
	},
	QueueLog: function(queue, event, uniqueid, interf, message){
		return this.action({
			action: 'QueueAdd',
			queue: queue,
			event: event,
			uniqueid: uniqueid,
			'interface': interf,
			message: message
		});
	},
	QueuePause: function(queue, interf, paused, reason){
		return this.action({
			action: 'QueuePause',
			queue: queue,
			'interface': interf,
			paused: paused ? '1' : '0',
			reason: reason
		});
	},
	QueuePenalty: function(queue, interf, penalty){
		return this.action({
			action: 'QueuePenalty',
			queue: queue,
			'interface': interf,
			penalty: penalty
		});
	},
	QueueReload: function(queue, members, rules, parameters){
		return this.action({
			action: 'QueueReload',
			queue: queue,
			members: members ? '1' : '0',
			rules: rules ? '1' : '0',
			parameters: parameters ? '1' : '0'
		});
	},
	QueueRemove: function(queue, interf){
		return this.action({
			action: 'QueueRemove',
			queue: queue,
			'interface': interf
		});
	},
	QueueReset: function(queue){
		return this.action({
			action: 'QueueReset',
			queue: queue
		});
	},
	QueueRule: function(queue){
		return this.action({
			action: 'QueueRule',
			queue: queue
		});
	},
	Queues: function(){
		return this.action({
			action: 'Queues'
		});
	},
	QueueSummary: function(queue){
		return this.action({
			action: 'QueueSummary',
			queue: queue
		});
	},
	Redirect: function(channel, destination, extraChannel, extraDestination){
		return this.action({
			action: 'Redirect',
			channel: channel,
			context: destination[0],
			exten: destination[1] || 's',
			priority: destination[2] || 1,
			extraChannel: extraChannel,
			extraContext: extraDestination[0],
			extraExten: extraDestination[1] || 's',
			extraPriority: extraDestination[2] || 1
		});
	},
	Reload: function(module){
		return this.action({
			action: 'Reload',
			module: module
		});
	},
	SendText: function(channel, message){
		return this.action({
			action: 'SendText',
			channel: channel,
			message: message
		});
	},
	Setvar: function(channel, veriable, value){
		return this.action({
			action: 'Setvar',
			channel: channel,
			veriable: veriable,
			value: value
		});
	},
	ShowDialPlan: function(context, extension){
		return this.action({
			action: 'ShowDialPlan',
			context: context,
			extension: extension
		});
	},
	SIPnotify: function(channel, veriable){
		return this.action({
			action: 'SIPnotify',
			channel: channel,
			veriable: veriable
		});
	},
	SIPpeers: function(){
		return this.action({
			action: 'SIPpeers'
		}, 'peerentry', 'peerlistcomplete');
	},
	SIPqualifypeer: function(peer){
		return this.action({
			action: 'SIPqualifypeer',
			peer: peer
		});
	},
	SIPshowpeer: function(peer){
		return this.action({
			action: 'SIPshowpeer',
			peer: peer
		});
	},
	SIPshowregistry: function(){
		return this.action({
			action: 'SIPshowregistry'
		}, 'registryentry', 'registrationscomplete');
	},
	SKINNYdevices: function(){
		return this.action({
			action: 'SKINNYdevices'
		}, 'devicelist', 'devicelistcomplete');
	},
	SKINNYlines: function(){
		return this.action({
			action: 'SKINNYlines'
		}, 'linelist', 'linelistcomplete');
	},
	SKINNYshowdevice: function(device){
		return this.action({
			action: 'SKINNYshowdevice',
			device: device
		});
	},
	SKINNYshowline: function(line){
		return this.action({
			action: 'SKINNYshowline',
			line: line
		});
	},
	Status: function(channel, variables){
		return this.action({
			action: 'Status',
			channel: channel,
			variables: typeof variables==='object' && typeof variables.join==='function' ? variables.join(',') : variables
		}, 'status', 'statuscomplete');
	},
	StopMonitor: function(channel){
		return this.action({
			action: 'StopMonitor',
			channel: channel
		});
	},
	UnpauseMonitor: function(channel){
		return this.action({
			action: 'UnpauseMonitor',
			channel: channel
		});
	},
	UpdateConfig: function(srcFilename, dstFilename, reload, changes){
		var action = {
			action: 'UpdateConfig',
			srcFilename: srcFilename,
			dstFilename: dstFilename,
			reload: reload ? '1' : '0'
		};
		var nextChangeId = 0;
		Object.keys(changes).forEach(function(change){
			var id = (nextChangeId++).toString();
			while(id.length < 6){
				id = '0'+id;
			}
			action['Action-'+id] = change.action;
			action['Cat-'+id] = change.category;
			if(change.variable){
				action['Var-'+id] = change.match;
			}
			if(change.value){
				action['Value-'+id] = change.value;
			}
			if(change.match){
				action['Match-'+id] = change.match;
			}
			if(change.line){
				action['Line-'+id] = change.line;
			}
		});
		return this.action(action);
	},
	UserEvent: function(userEvent, data){
		var action = {};
		for(var key in data){
			action[key.toLowerCase()] = data[key];
		}
		action.action = 'UserEvent';
		action.userevent = userEvent;
		return this.action(action);
	},
	VoicemailUsersList: function(){
		return this.action({
			action: 'VoicemailUsersList'
		}, 'voicemailuserentry', 'voicemailuserentrycomplete');
	},
	WaitEvent: function(timeout){
		return this.action({
			action: 'WaitEvent',
			timeout: timeout
		});
	}
};