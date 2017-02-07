$(document).ready( function() {


	/*
		gestion de la salutation 
		si entre 6h et 12h = bonjour,
		si entre 12h et 16h = bonne apres midi,
		si entre 16h et 23h = bonsoir,
		si entre 23h et 6h = bonne nuit.
	 */
		var resultat = maintenant_imawa();
		console.log(resultat);
		var heure = resultat['heure'];
		console.log(heure);
		console.log(parseInt(heure));
		var presentation ='';
		if ( parseInt(heure) >= 4 && parseInt(heure) < 16 ) { presentation = 'Bonjour et bienvenue'; }
			
			else if ( parseInt(heure) >= 16 && parseInt(heure) < 24 ) { presentation = 'Bonsoir et bienvenue'; }
			else if ( parseInt(heure) > 0 && parseInt(heure) < 4 ) { presentation = 'Douce nuit et bienvenue'; }
			else if ( heure == 0 ) { presentation = 'Bonne nuit et bienvenue'; }
			else {presentation = 'une erreurs qq part...'; }
		console.log(presentation);
		$('#salutation').text(presentation);








//fin du script jquery
});