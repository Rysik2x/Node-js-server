// const http = require('http');

// const public = require('./routes/public');

// http.createServer((req, res) => {
// 	if (req.url.match(/\.(html|css|js|png)$/)) {
// 		public(req, res);
// 	} else if (req.url === '/') {

// 	} else if (req.url.startsWith('/search')) {

// 	} else {

// 	}
// }).listen(3000, () => console.log('Сервер работает'));
const http = require('http');

const html = `
<!doctype>
<html>
<head>
<meta charset="utf-8"/>
<title>Основы Node.js</title>
<link rel="stylesheet" href="app.css" />
</head>

<body>
<h1>Основы Node.js</h1>
<button>Нажми на меня</button>

<script src="app.js"></script>
</body>
</html>
`;

const css = `
body {
	margin: 0;
	padding: 0;
	text-align: center;
}
h1 {
	background-color: #43853d;
	color: #fff;
	padding: .5em;
	fontFamily = 'Consolas';
}
`;

const js = `
const button = document.querySelector('button');
button.addEventListener('click', event => alert('Node.js в действии'));
`;

http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(html);
		break;
		case '/app.css':
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.end(css);
		break;
		case '/app.js':
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.end(js);
		break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('404 не найдено');
			break;
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	}).listen(3000, () => console.log('Сервер работает'));

