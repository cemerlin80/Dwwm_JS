var nom = document.getElementById('name'); //Société
var contact = document.getElementById('contact'); // Personne à contacter
var adresse = document.getElementById('adresse'); // Adresse de l'entreprise
var CP = document.getElementById('CP'); // Code Postal
var ville = document.getElementById('ville'); // Ville
var mail = document.getElementById('mail');  // Email
var tel = document.getElementById('tel');  //téléphone
var bouton = document.getElementById('soumet'); // Bouton envoyer
var bouton2 = document.getElementById('sup'); // Bouton effacer
var leFormulaire = document.getElementById('leFormulaire'); // Formulaire
// les regex
var textValid = /^[a-zA-Z\-éèàçùëüïôäâêûîô#&]+$/;
var contactValid = /^[a-zA-Z\-éèàçùëüïôäâêûîô#&]+$/;
var adresseValid = /^[a-zA-Z\-éèàçùëüïôäâêûîô#&]+$/; // Changer le regex
var codePostalValid= /^0[1-9]([-. ]?[0-9]{2}){5}$/;
var villeValid= /^[a-zA-Z\-éèàçùëüïôäâêûîô#&]+$/;
var mailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;
var phoneValid = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

// les booléens de test
var flagNom = 0;
var flagContact = 0;
var flagAdresse = 0;
var flagCP = 0;
var flagVille = 0;
var flagMobile = 0;
var flagMail = 0;
var flag = 0;

// active la vérification à la perte de focus
nom.onblur = checkForm;  // Blur = perte de focus sur un élément
contact.onblur = checkForm;
adresse.onblur = checkForm;
CP.onblur = checkForm;
ville.onblur = checkForm;
tel.onblur = checkForm;
mail.onblur = checkForm;
// active la validation avant envoie
bouton.onclick = envoie;   // fonction envoyer
// active la validation avant effacer
bouton2.onclick = effacer; // fonction effacer


function checkForm() { // Fonction permettant de vérifier le formulaire

    // verfification du nom de la société
    if (textValid.test(nom.value) == true) {   // textvalid = regex pour texte

        nom.classList.remove("is-invalid");
        nom.classList.add("is-valid");
        flagNom = 1;  // Si flag = 1 , il s'affiche , sinon si flag = 0 , il ne s'affiche pas et le champ est incorrect
    } else {
        nom.classList.remove("is-valid");
        nom.classList.add("is-invalid");
        flagNom = 0;

    }

    // Personne à contacter
    if (contactValid.test(contact.value) == true) {   // contactValid = regex pour contact

        contact.classList.remove("is-invalid");
        contact.classList.add("is-valid");
        flagContact = 1;  
    } else {
        contact.classList.remove("is-valid");
        contact.classList.add("is-invalid");
        flagContact = 0;
    }

    // Adresse de l'entreprise
    if (adresseValid.test(adresse.value) == true) {   // adresseValid = regex pour adresse

        adresse.classList.remove("is-invalid");
        adresse.classList.add("is-valid");
        flagAdresse  = 1;  
    } else {
        adresse.classList.remove("is-valid");
        adresse.classList.add("is-invalid");
        flagAdresse  = 0;
    }

    // Code Postal
    if (codePostalValid.test(CP.value) == true) {   // codePostalValid = regex pour Code Postal

        CP.classList.remove("is-invalid");
        CP.classList.add("is-valid");
        flagCP = 1;  
    } else {
        CP.classList.remove("is-valid");
        CP.classList.add("is-invalid");
        flagCP = 0;
    }

     //ville
     if (villeValid.test(ville.value) == false) {   // villeValid = regex pour ville
        ville.classList.remove("is-valid");
        ville.classList.add("is-invalid");
        flagVille = 0;

    } else {
        ville.classList.remove("is-invalid");
        ville.classList.add("is-valid");
        flagVille = 1;

    }


    // verfification du mail
    if (mailValid.test(mail.value) == false) {   // mailvalid = regex pour mail
        mail.classList.remove("is-valid");
        mail.classList.add("is-invalid");
        flagMail = 0;

    } else {
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
        flagMail = 1;

    }
   
    // verfifcation du tel
    if (phoneValid.test(tel.value) == false) {     // phonevalid = regex pour tel
        tel.classList.remove("is-valid");
        tel.classList.add("is-invalid")
        flagMobile = 0;

    } else {
        tel.classList.remove("is-invalid");
        tel.classList.add("is-valid");
        flagMobile = 1;

    }
    console.log(`flagNom ${flagNom} flagMail ${flagMail} flagMobile ${flagMobile} flagContact ${flagContact} flagAdresse ${flagAdresse} flagCP${flagCP} flagVille${flagVille}`)
}

function envoie() {
    // si les 6 conditions sont ok on envoie
    flag = flagNom + flagMail + flagMobile + flagContact + flagAdresse + flagCP + flagVille;
    console.log(`flag ${flag}`);
    if (flag === 6) {
       
        bouton = window.confirm("Valider le formulaire ?");
        bouton = window.alert("Validation du formulaire")
        leFormulaire.submit();
    } else {
        alert('Veuillez vérifier les champs');

    }
}
function effacer() { // Création d'une fonction effacer pour réintialiser le formulaire si celui-ci est incorrect.
    leFormulaire.reset(); // reset = réinitialiser le formulaire
    bouton2 = window.confirm("Supprimer formulaire?");
    bouton2 = alert("Suppression du formulaire");
}


var liste = document.getElementById("liste");  // Création de 2 variables , liste et choix.
var choix = document.getElementById("choix");


// Sélection de l'environnement technique
choix.addEventListener("change", function(){     // Ajout de l'événement "change" qui se déclenche pour le textarea , lorsqu'un changement de valeur est réalisé par l'utilisateur.
    if (choix.value!="Choisissez"){      // Si l'utilisateur choisis rien , alors "choisissez"
        if(liste.value.indexOf(choix.value)==-1){ //indexof , renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
            liste.textContent+=choix.value +"\n"; // textContent , chaîne de caractères représentant le contenu au format texte de l'élément
        }        
    }    
});

// Animation bouton

/*soumet.onclick = function() {   // fonction pour animation bouton "Envoyer"
    this.style.fontSize = '20px'; // On récupère le fontsize du css , et on l'intègre dans la fonction avec this. , puis on indique le px , le bouton prendra cette taille sur le clique.
    this.style.color = 'black'; // On récupère la couleur css , le nom du bouton changera de couleur sur le clique
};

sup.onclick = function() {    // fonction pour animation bouton "Effacer"
    this.style.fontSize = '20px';
    this.style.color = 'black'; 
};
*/

