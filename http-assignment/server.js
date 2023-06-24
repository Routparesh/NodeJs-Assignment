const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('<P>I Am Happy To Learn Full Stack Web Development From Pw Skills!</P>');
	}
	res.end();
});

server.listen(5002);

console.log(' listening on port 5002');
