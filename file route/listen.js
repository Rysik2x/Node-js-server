// var fs = require('fs');
// fs.readFile('t2.json', function(err, data) {
// 	if (err) throw err;
// 	var arr = data.toString();
// 	arr = JSON.parse(arr);
// 	console.log(arr);
// });

var fs = require('fs');
fs.readFile('t1.txt', function(err, data) {
	if (err) throw err;
	var arr = data.toString();
	arr = arr.split('\n');
	console.log(arr[2]);
});