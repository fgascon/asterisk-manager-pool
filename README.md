# asterisk-manager-pool
Pooled AMI connections

## Usage

```js
var AsteriskManager = require('asterisk-manager-pool');

var ami = AsteriskManager({
	host: 'localhost', //default to localhost
	port: 5038, //default to 5038
	username: 'myUser',
	password: 'mySecretPassword'
});

ami.DBGet('myFamily', 'myKey')
	.done(function(value){
		console.log('RESULT:', value);
	}, function(err){
		console.error('ERROR:', err.stack||err);
	});
```