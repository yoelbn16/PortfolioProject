getCountries();

let score = 0;
let questionsAnswered = 0;

async function getCountries() {
	try {
		const result = await axios.get('https://restcountries.com/v3.1/independent?status=true&fields=name,flags');
		const countries = result.data;
		game(countries);
	} catch (error) {
		console.error('Error fetching countries:', error);
	}
}

function game(countries) {
	for (let i = 1; i <= 4; i++) {
		document.getElementById(`option-${i}`).style.backgroundColor = '#005792';
	}
	document.getElementById('next').style.visibility = 'hidden';
	const selectedCountry = countries[Math.floor(Math.random() * 194)];
	const flag = selectedCountry.flags.svg;
	const name = selectedCountry.name.common;

	document.querySelector('img').src = flag;

	const usedOption = new Set();
	const usedCountries = new Set();

	let randomOptionCorrect = Math.ceil(Math.random() * 4);
	usedOption.add(randomOptionCorrect);

	console.log(randomOptionCorrect);
	console.log(name);

	document.getElementById(`option-${randomOptionCorrect}`).innerHTML = `<span style="">${name}</span>`;
	document.getElementById(`option-${randomOptionCorrect}`).setAttribute('onclick', `check('${name}','${name}','option-${randomOptionCorrect}','option-${randomOptionCorrect}')`);

	for (let i = 0; i < 3; i++) {
		randomOptionWrong = Math.ceil(Math.random() * 4);
		randomWrongCountry = Math.floor(Math.random() * 194);

		if (usedOption.has(randomOptionWrong) || usedCountries.has(countries[randomWrongCountry])) i--;
		else {
			usedOption.add(randomOptionWrong);
			usedCountries.add(randomWrongCountry);
			document.getElementById(`option-${randomOptionWrong}`).innerHTML = `<span style="">${countries[randomWrongCountry].name.common}</span>`;
			document.getElementById(`option-${randomOptionWrong}`).setAttribute('onclick', `check('${countries[randomWrongCountry].name.common}','${name}','option-${randomOptionWrong}','option-${randomOptionCorrect}')`);
		}
	}
	updateScore();
}

function check(userCountry, correctCountry, userOption, correctOption) {
	document.getElementById('next').style.visibility = 'visible';
	if (userCountry != correctCountry) {
		document.getElementById(userOption).style.backgroundColor = '#FF4848';
		document.getElementById(correctOption).style.backgroundColor = '#3A9679';
	} else {
		document.getElementById(correctOption).style.backgroundColor = '#3A9679';
		score++;
	}
	for (let i = 1; i <= 4; i++) {
		document.getElementById(`option-${i}`).removeAttribute('onclick');
	}
	questionsAnswered++;
}

function updateScore() {
	document.querySelector('.score').innerText = `${score}/${questionsAnswered}`;
}

function reset() {
	score = 0;
	questionsAnswered = 0;
	getCountries();
	updateScore();
}
