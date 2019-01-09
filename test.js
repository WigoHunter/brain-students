const fs = require('fs');

// const papa = require('papaparse');
// const file = fs.createReadStream('responses.csv');

// papa.parse(file, {
// 	complete: (res) => {
// 		console.log(res);
// 	}
// });

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train([{input: { from: 'taiwan' }, output: [1] },
	{input: { from: 'usa' }, output: [1]},
	{input: { from: 'china' }, output: [0]}], {
		log: true
	});

const output = net.run({ from: 'taiwan' });  // { white: 0.99, black: 0.002 }
console.log(output);

// const json = JSON.stringify(net.toJSON());
// fs.writeFile('net.json', json, 'utf8', () => console.log('success!'));

// const data = require('./net.json');
// net.fromJSON(data);
// const output = net.run({ r: 1, g: 0.4, b: 0 });
// console.log(output);
