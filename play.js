const brain = require('brain.js');
const map = require('./map.json');
const model = require('./net.json');

const net = new brain.NeuralNetwork();
net.fromJSON(model);

/* 
MAJOR_CATOGORY: 請選填以下選項

Engineering, Computer Science
Language school
Art, Music, Architecture, Film, Media
Arts and Science
Economics, Management
Economics, Management, Business, Marketing
Engineering
Education
Humanities
Law
Medical Sciences, Medicine, Nursing
Science and Math
Science, Math
Technology management 
Social sciences 
Still in High School
*/


// PLEASE INPUT THE DATA
const COUNTRY = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();
const STATE = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();
const CITY = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();
const AGE = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();
const MAJOR_CATOGORY = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase(); // Choose from the list above 
const MAJOR = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();
const CITY_IN_TAIWAN = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase(); // type in 中文
const GENDER = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase(); // Male or Female or prefernot to say
const AGE_WHEN_MOVED_ABROAD = '____INPUT DATA____'.trim().replace(' ', '').toLowerCase();

// DATA
const data = {
	Country: map['Country'].hasOwnProperty(COUNTRY) ? map['Country'][COUNTRY] : -1,
	City: map['City'].hasOwnProperty(CITY) ? map['City'][CITY] : -1,
	'State (na if not applicable)': map['State (na if not applicable)'].hasOwnProperty(STATE) ? map['State (na if not applicable)'][STATE] : -1,
	Age: map['Age'].hasOwnProperty(AGE) ? map['Age'][AGE] : -1,
	'Major Category/Industry': map['Major Category/Industry'].hasOwnProperty(MAJOR_CATOGORY) ? map['Major Category/Industry'][MAJOR_CATOGORY] : -1,
	Major: map['Major'].hasOwnProperty(MAJOR) ? map['Major'][MAJOR] : -1,
	'City in Taiwan you\'re from': map['City in Taiwan you\'re from'].hasOwnProperty(CITY_IN_TAIWAN) ? map['City in Taiwan you\'re from'][CITY_IN_TAIWAN] : -1,
	Gender: map['Gender'].hasOwnProperty(GENDER) ? map['Gender'][GENDER] : -1,
	'Age When Moved Abroad': map['Age When Moved Abroad'].hasOwnProperty(AGE_WHEN_MOVED_ABROAD) ? map['Age When Moved Abroad'][AGE_WHEN_MOVED_ABROAD] : -1,
};

let count = 0;
for (let i in data) {
	count += data[i] == -1 ? 1 : 0;

	if (count >= 5) {
		console.log("Sorry... We don't have enough data to predict your result :(");
		return;
	}
}

// RUN THE NEURAL NET
const output = net.run(data);
console.log(output);