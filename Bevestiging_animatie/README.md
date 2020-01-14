
## Bevestiging animatie

Met de code die is geschreven is men in staat om het advies betreft de animatie bij bevestiging invullen contactformulier te realiseren. Vrij om zelf de vormgeving aan te passen. Het gaat hier puur om de technische realisatie van de functionaliteit.

## Demo
Klik binnen de mappenstructuur op GIT naar de index.html en open deze in de browser. De rest wijst zichzelf.

## Code voorbeeld
Om de functionaliteit te gebruiken moet eerst jquery en de main.js bovenaan de HTML worden ingeladen.
```
<script src="js/jquery-2.1.1.js"></script>
<script src="js/main.js"></script>

```
Er worden labels aangemaakt met de informatie die je graag wilt gebruiken
```
	<section id="contact" class="contact">
		<div class="row-container">
			<div class="contact-container">
				<form role="form" id="contact-form">

					<label for="name">Uw naam*</label>
					<input type="text" name="name" id="name" required aria-required="true" autocorrect="off">
					<label for="email">Uw e-mailadres*</label>
					<input type="text" name="email" id="email" required aria-required="true" autocorrect="off">

					<label for="telefoonnummer">Uw telefoonnummer*</label>
					<input type="text" name="telefoonnummer" id="telefoonnummer" required aria-required="true" autocorrect="off">

					<label for="message">Bericht*</label>
					<textarea type="text" name="contenido" id="message" required aria-required="true" autocorrect="off"></textarea>
					<button class="button btn-send" id="sendBtn">
						<svg id="sendMessage" xmlns="http://www.w3.org/2000/svg" class="send-message" viewBox="0 0 32.8 22">
							<style type="text/css">.st60{fill:none;stroke:#FFF;stroke-width:2;stroke-miterlimit:10;}</style>
							<polyline class="st60" points="31.4 7.3 16.4 13.7 1.4 7.3 "/>
							<rect x="1" y="1" fill="none" class="st60" width="30" height="20" rx="2" ry="2" />
						</svg>
						<input id="submitBtn" type="submit" value="Versturen">
					</button>

				</form>

			</div>

		</div>
	</section>
```

Binnen de JS file maak je variabele aan van de desbetreffende labels. Deze kun je zelf in de HTML en in de main.js aanpassen naar wens. Voor de rest van de informatie is er gebruik gemaakt van comments die de code toelichten.
```
var bericht = document.getElementById('sendMessage');
var submitName = document.querySelectorAll('#name');
var submitText = document.querySelectorAll('#message');
var submitEmail = document.querySelectorAll('#email');
var submitTelefoonnummer = document.querySelectorAll('#telefoonnummer');
var schudden = document.getElementById('contact-form');

```

## Waar is het mee gemaakt?

HTML
CSS
Javascript


## Auteur
<b>Camiel de Hoogt</b> - [GitHub](https://github.com/CCDH)
