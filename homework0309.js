fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
		var stations = data.network.stations;
    //écriture ici
for (var i = 0; i < stations.length; i++) {
  console.log(stations[i].name + ' // ' + stations[i].empty_slots + ' // ' + stations[i].free_bikes); //à compléter/revoir);
	// 
  // var liste = document.querySelector('ul');
  // var currentLi = document.createElement('li');
  // currentLi.textContent = stations[i].empty_slots;
	// liste.appendChild(currentLi)

}
for (var i = 0; i < stations.length; i++) {
	var listenoms = document.querySelector('h2');
	var nomsstations = document.createElement('p');
	nomsstations.textContent = stations[i].name;
	listenoms.appendChild(nomsstations)


	var listefree = document.querySelector('ul');
  var currentLifree = document.createElement('li');
  currentLifree.textContent = stations[i].free_bikes + ' // ' + stations[i].empty_slots;
	listefree.appendChild(currentLifree)
}
    //et là
	});
});

// HOMEWORK :
//AFFICHER POUR CHAQUE STATION LE NOMBRE DE VELOS DISPO empty_slots et free bikes
// indicateur visuel lorsqu'il ya moins de 50% des vélos disponibles BONUS (système de proportion)
// déduire un nombre de places grâces aux places vides et free-bikes

//var liste = document.querySelector('ul');
// for (var i = 0; i < etudiants.length; i++) {
// 	var currentLi = document.createElement('li');
// 	currentLi.textContent = etudiants[i];
// 	liste.appendChild(currentLi);
