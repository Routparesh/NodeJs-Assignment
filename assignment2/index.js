const fs = require('fs');
const path = require('path');

const filePath =
	'C:\\Users\\Admin\\Desktop\\PW-Skills-Projects-master\\pw pratice\\Pw NodeJs\\assignment1\\nodejs_architecture.txt';

fs.readFile(filePath, 'utf8', function (err, data) {
	if (err) {
		console.log('An error occurred:', err);
	} else {
		console.log('Data: ', data.toString());
	}
});

const informationToAdd =
	'Compared to other server-side languages,Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads,consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.';

fs.appendFile(filePath, informationToAdd, 'utf-8', function (err) {
	if (err) {
		console.log('error in adding');
	} else {
		console.log('added successfully');
	}
});
