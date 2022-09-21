const log = require('ssi-logger');
const express = require('express');
const app = express();
const port = 3000;

log.open({syslog: {facility: 'LOG_LOCAL1'}});
log.info('Hello the World');
log.close();

app.get('/', (req, res) => {
	res.send(`... Hello!`);
});

const callLog = () => {
	const time = new Date().getTime();
	log.open({syslog: {facility: 'LOG_LOCAL1'}});
	log.info(`Hello World ${time}`);
	log.close();
}
app.listen(port, () => {
	console.log(`... listening on port ${port}`);
	console.log('... application started');

	setInterval(() => callLog(),1000)
});
