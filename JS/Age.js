var birthDate;
var Date = 2019;


/*var birthDate = prompt("Quel est votre année de naissance ?")

function dateDiff(birthDay, Date)
{
    return new Number((Date.getTime() - birthDate.getTime()) / 365);

}
var Date = alert("Vous avez : +âge"); */

var birthDate = prompt("Quel est votre année de naissance ?")

function age(birthDate)
{
    birthDate = new Date(birthDate);
    return new Number((new Date().getTime() - birthDate.getTime())/ 365).toFixed(0);
    
   
}
function age(Date)
{
    new Date = alert("Vous avez : "+âge");
}
