const brain = require('brain.js');
const map = require('./map.json');
const model = require('./net.json');

const net = new brain.NeuralNetwork();
net.fromJSON(model);

/* 
MAJOR_CATOGORY: 請選填以下選項

engineering,computer science
languageschool 
art,music, architecture, film, media
economics,management, business, marketing
education
science,math
medicalsciences, medicine, nursing
technologymanagement
law
foundationstudies
humanities,social sciences, political sciences
circus
stillin high school
artsand science

*/
const COUNTRY = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const STATE = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const CITY = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const AGE = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const MAJOR_CATOGORY = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const MAJOR = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const CITY_IN_TAIWAN = '_____DATA______'.trim().replace(' ', '').toLowerCase();
const GENDER = '_____DATA______'.trim().replace(' ', '').toLowerCase(); // Male or Female or prefernot to say
const AGE_WHEN_MOVED_ABROAD = '_____DATA______'.trim().replace(' ', '').toLowerCase();

// RUN THE NEURAL NET
const output = net.run({
	Country: map['Country'].hasOwnProperty(COUNTRY) ? map['Country'][COUNTRY] : "",
	City: map['City'].hasOwnProperty(CITY) ? map['City'][CITY] : "",
	'State (na if not applicable)': map['State (na if not applicable)'].hasOwnProperty(STATE) ? map['State (na if not applicable)'][STATE] : "",
	Age: map['Age'].hasOwnProperty(AGE) ? map['Age'][AGE] : "",
	'Major Category/Industry': map['Major Category/Industry'].hasOwnProperty(MAJOR_CATOGORY) ? map['Major Category/Industry'][MAJOR_CATOGORY] : "",
	Major: map['Major'].hasOwnProperty(MAJOR) ? map['Major'][MAJOR] : "",
	'City in Taiwan you\'re from': map['City in Taiwan you\'re from'].hasOwnProperty(CITY_IN_TAIWAN) ? map['City in Taiwan you\'re from'][CITY_IN_TAIWAN] : "",
	Gender: map['Gender'].hasOwnProperty(GENDER) ? map['Gender'][GENDER] : "",
	'Age When Moved Abroad': map['Age When Moved Abroad'].hasOwnProperty(AGE_WHEN_MOVED_ABROAD) ? map['Age When Moved Abroad'][AGE_WHEN_MOVED_ABROAD] : "",
});

console.log(output);