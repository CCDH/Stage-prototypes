
## Filter optie van product specificatie

Uit onderzoek kon geconcludeerd worden dat de huidige situatie niet goed werd ontvangen en dat deze gebruiksvriendelijker gemaakt moest worden. Een advies dat is geschreven hiervoor is om enkele de door Acknowledge belangrijkste specificaties te laten zien die uit te breiden zijn. Dit zorgt ervoor dat de bezoeker niet overladen wordt met voor hem/haar niet relevante informatie.

## Demo
Klik binnen de mappenstructuur op GIT naar de index.html en open deze in de browser. De rest wijst zichzelf.

## Code voorbeeld
Om de functionaliteit te gebruiken moet eerst jquery en de main.js bovenaan de HTML worden ingeladen.
```
<script src="js/jquery-2.1.1.js"></script>

```
Er worden labels aangemaakt met de gekozen specificaties. Door middel van de ondergenoemde code kun je zelf meerdere labels toevoegen. Deze zijn standaard zichtbaar op de pagina.
```
<div class="filters">
        	<form method="post" action="#">
        		<input class="zoeken" type="text" placeholder="Zoeken naar" name=""><br>

                <label for="merk">Merk</label>
                <br> <select id="merk" name="merk">
                    <option value="asus">Asus</option>
                    <option value="lenovo">Lenovo</option>
                    <option value="hp">HP</option>
                </select>
                <br> <label for="besturingssysteem">Besturingssysteem</label>
                <br><select id="besturingssysteem" name="besturingssysteem">
                    <option value="macos">MacOsX</option>
                    <option value="linux">Linux</option>
                    <option value="windows">Windows</option>
                </select>
                <br><label for="processor">Processor</label>
```

Vervolgens wordt een nieuwe div gemaakt met daarin de rest van de specificaties. Deze is op display: none; gezet totdat de functie wordt aangeropen.
```
	<div class="items" style="display: none;">


                    <label for="merk">Processorfamilie</label>
                    <br> <select id="merk" name="merk">
                    <option value="i5">Intel 8ste generatie Core i5</option>
                    <option value="i5">Intel 8ste generatie Core i5</option>
                </select>
                    <br> <label for="besturingssysteem">Intern geheugentype</label>
                    <br><select id="besturingssysteem" name="besturingssysteem">
                    <option value="macos">DDR4-SDRAM</option>

                </select>
                    <br><label for="processor">Aantal kernen</label>
                    <br><select id="processor" name="processor">
                    <option value="2">2-Core</option>
                    <option value="3">3-Core</option>
                    <option value="4">4-Core</option>
                </select>
```
Om de functie aan te roepen is er een label aangemaakt de class: switch
```
	<label class="switch">
                    <input type="checkbox" class="toggle-switch">
                    <span class="slider round"></span>
                </label>
```
Bij het klikken op de switch wordt de volgende functie opgeroepen
```
	    <script>
        $(document).ready(function(){
            $(".toggle-switch").on('change', function() {
                $(".items").toggle("slow");
            });
        });
    </script>
```

## Waar is het mee gemaakt?

HTML
CSS
Javascript

## Auteur
<b>Camiel de Hoogt</b> - [GitHub](https://github.com/CCDH)
