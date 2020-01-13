
// Variabele worden opgezet voor de verschillende input velden uit de index.html. Er moet per nieuw veld een variabele gemaakt worden.
var bericht = document.getElementById('sendMessage');
var submitName = document.querySelectorAll('#name');
var submitText = document.querySelectorAll('#message');
var submitEmail = document.querySelectorAll('#email');
var submitTelefoonnummer = document.querySelectorAll('#telefoonnummer');
var schudden = document.getElementById('contact-form');

// Hier gaat die kijken of er iets is ingevuld binnen de velden zodra er op de verzendknop gedrukt wordt.
document.getElementById('sendBtn').addEventListener('click', function (e) {
	if (submitName['0'].validity.valid && submitText['0'].validity.valid && submitEmail['0'].validity.valid && submitTelefoonnummer['0'].validity.valid) {
		e.preventDefault();
		bericht.classList.remove('not-active');
		bericht.classList.add('active');

	}
	else {
		bericht.classList.add('not-active');
		schudden.classList.add('active');
	}
});

// Hier wordt er gekeken of er iets ingevuld is bij de verschillende velden. Mocht dit bij een niet het geval zijn dan triggerd deze het inputfield te laten schudden middels CSS transform.

document.getElementById('name').addEventListener('click', function () {
	bericht.classList.remove('not-active');
	schudden.classList.remove('active');
});

document.getElementById('message').addEventListener('click', function () {
	bericht.classList.remove('not-active');
	schudden.classList.remove('active');
});

document.getElementById('telefoonnummer').addEventListener('click', function () {
	bericht.classList.remove('not-active');
	schudden.classList.remove('active');
});

document.getElementById('email').addEventListener('click', function () {
	bericht.classList.remove('not-active');
	schudden.classList.remove('active');
});
