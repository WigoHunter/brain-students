const fs = require('fs');
const brain = require('brain.js');
const papa = require('papaparse');
const file = fs.createReadStream('responses.csv');

// Process Data
const processData = data => {
	const frame = data[0];
	data = data.slice(1).filter(e => e[12] != '').map(entry => {
		let input = {}
		for (let i = 1; i < frame.length - 1; i++) {
			input[entry[i]] = 1;

			// input[frame[i]] = {}
			// input[frame[i]][entry[i]] = 1;

			// input[frame[i]] = entry[i];
		}

		return {
			input,
			output: {
				[entry[frame.length - 1] / 10]: 1
			}
		};
	});

	console.log(data);
	
	// const net = new brain.NeuralNetwork();
	// net.train(data, {
	// 	log: true
	// });

	const cv = new brain.CrossValidate(brain.NeuralNetwork);
	const stats = cv.train(data, { log: true });
	console.log(stats);
	const net = cv.toNeuralNetwork();


	// test = {
	// 	Country: { USA: 1 },
	// 	City: {'New York City': 1},
	// 	Aga: {'23': 1},
	// 	Major: {'Computer Science': 1},
	// 	Gender: {'Male': 1}
	// }

	// object
	const output = net.run({
		'USA': 1,
		'New York City': 1,
		'23': 1,
		'台北市': 1,
		'Computer Science': 1,
		'Female': 1
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
