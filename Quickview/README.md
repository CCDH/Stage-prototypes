
## Library

Met deze kleine library kun je het formaat aanpassen van het object, het object vervagen en het object laten draaien.

## Demo
https://github.com/CCDH

## Code voorbeeld
Om de library te gebruiken moet je eerst de de volgende JS file bovenaan de HTML pagina inladen.
```
<script src="js/library.js"></script>

```

De makkelijkste manier om deze library te gebruiken is om deze in een variabele te zetten en deze een class toe te wijzen en de init functie erop toe te passen. Hij zal dan deze class gebruiken om de functie op toe te passen. In dit geval heet deze variabele "rotate".


```javascript
//Initialize het eerste object zonder params zodat hij de default settings gebruikt
	var rotate = new Rotate();
		rotate.init('.pijl', {});
```

Als je je eigen selector wilt gebruiken moet je de default class aanpassen of een nieuwe selector aanmaken. 

Je kunt dan zoals hieronder beschreven de grootte van het object, het object laten vervagen en het object draaien. Dit doe je binnen de HTML pagina.
```javascript
//Wanneer je je eigen settings wilt gebruiken moet je binnen de init je eigen gekozen waardes invullen zoals hieronder beschreven.
var rotate = new Rotate();
rotate.init('.rotate', {choosedegrees: 90, chooseopacity:0.8}, choosescale: 2.0);
```

## Installatie

Download de library.js file en stop deze in de head van je page om hem op te roepen. Gebruik de opmaak zoals beschreven in de html pagina

## Waar is het mee gemaakt?

Javascript
HTML

## Author
<b>Camiel de Hoogt</b> - [GitHub](https://github.com/CCDH)
