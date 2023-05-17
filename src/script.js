
var button = document.getElementById('myButton');
var popup = document.getElementById('myPopup');
var closeButton = document.getElementById('closeButton');

// Fonction pour afficher la pop-up
function showPopup() {
  popup.style.display = 'block'
}

// Fonction pour masquer la pop-up
function hidePopup() {
  popup.style.display = 'none'
}

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
button.addEventListener('click', showPopup);

// Ajouter un gestionnaire d'événement pour le clic sur le bouton de fermeture
closeButton.addEventListener('click', hidePopup);
