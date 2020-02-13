

var nom;         //On déclare les variables //
var prénom;
var sexe;

var nom = window.prompt("Entrez votre nom :")      //nom_de_variable = méthode() //
var prénom = window.prompt("Entrez votre prénom :");      //La méthode prompt permet d'afficher une boite de dialogue avec zone de saisie de texte

if (window.confirm("Etes vous un homme ?") == "true")  // La méthode confirm renvoie une valeur true or false
{
  sexe = 'Monsieur';
}else{
    sexe = 'Madame';
}

alert(`Bonjour ${sexe} ${nom} ${prénom} \n Bienvenue sur notre site web !`); // alert `Message affiché + les variables `//  // \n permet de revenir à la ligne //
// On entre les variables entre {} avec $ 