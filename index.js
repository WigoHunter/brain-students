const fs = require('fs');
const brain = require('brain.js');
const papa = require('papaparse');
const file = fs.createReadStream('responses.csv');
const map = require('./map.json');
const model = require('./net.json');

// Process Data
const processData = data => {
	// const frame = data[0];
	// data = data.slice(1).filter(e => e[12] != '').map(entry => {
	// 	let input = {};

	// 	for (let i = 1; i < frame.length - 1; i++) {
	// 		const key = `${entry[i]}`.trim().replace(' ', '').toLowerCase();
	// 		input[frame[i]] = map[frame[i]][key];
	// 	}

	// 	return {
	// 		input,
	// 		output: {
	// 			happiness: entry[frame.length - 1] / 10
	// 		}
	// 	};
	// });
	
	const net = new brain.NeuralNetwork();
	net.fromJSON(model);
	// net.train(data, {
	// 	log: false,
	// 	errorThresh: 0.01
	// });

	// const cv = new brain.CrossValidate(brain.NeuralNetwork);
	// const stats = cv.train(data, { log: false });
	// console.log(stats);
	// const net = cv.toNeuralNetwork();

	// fs.writeFile('net.json', JSON.stringify(net.toJSON()), 'utf8', () => console.log('success!'));

	const output = net.run({
		Country: 3,
		'State (na if not applicable)': 9,
		Age: 0,
		'Major Category/Industry': 0,
		Major: 6,
		'City in Taiwan you\'re from': 0,
		'Birth Month': 7,
		Gender: 0,
		'Age When Moved Abroad': 0
	});

	console.log(output);
}

papa.parse(file, {
	complete: res => processData(res.data)
});












// const trainingData = [{
// 	input: 
// }]



// TRAIN OUR OWN NEW NET
// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
// 	{input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
// 	{input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

// const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

// const json = JSON.stringify(net.toJSON());
// fs.writeFile('net.json', json, 'utf8', () => console.log('success!'));


// USE JSON FILE TO IMPORT NET
// const data = require('./net.json');
// net.fromJSON(data);
// const output = net.run({ r: 1, g: 0.4, b: 0 });
// console.log(output);
