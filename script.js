// EXERCICE 1

let texte = "Notre formation DL commence aujourd'hui";

console.log()
console.log("Exercice 1 : \nLa phrase « Notre formation DL commence aujourd’hui » contient "+ texte.length +" caractères");
//concatener , il faut mettre des "+"

// EXERCICE 2

console.log(" "); // <br> chez javascript ou dans un console.log : \n
console.log("Exercice 2 : \nLa phrase « "+texte+" contient "+ texte.split(" ").length +" mots.");

// EXERCICE 3

let replace = texte.replace("aujourd'hui", "demain");   // (nom variable).replace("ancien mot","nouveau mot")

console.log("Exercice 3 : \n"+replace);

// EXERCICE 4

/*
function palindrome(str) {
    let reg = /[\W_]/g;                         // expression regulière (on appelle regex) code couleur rouge
    str = str.toLowerCase().replace(reg,'');    //condition la phrase pour être reverse
    let len = str.length;                       //compte le nombre de caractères dans le palindrome
    for (let i = 0; i < len/2; i++) {
        if(str[i] !== str[len - 1 -i]) {
            return "n'est pas un palindrome.";
        }
    }
    return "est un palindrome.";
}
console.log("Exercice 4 :  \nLa phrase « Engage le jeu que je le gagne »"+palindrome("Engage le jeu que je le gagne"));
*/


function palindrome(str) {
    let reg = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(reg,'');
    let reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        console.log("La phrase « "+str+" » est un palindrome");
    } else {
        console.log("La phrase « "+str+" » n'est pas un palindrome");
    }
}

console.log("Exercice 4 : ");
palindrome("Engage le jeu que je le gagne");

// EXERCICE 5

let somme = 100;
let change = 6.55957;
let euro = Math.round(somme / change *100)/100;

console.log("Exercice 5 : \nMontant en francs : "+somme);
// console.log(somme+" francs = "+euro.toFixed(2)+" € ");   Converti en texte
console.log(somme+" francs = "+euro+" € ")
//console.log(0.1+0.2); fixer la precision du float car sinon resultat faux en brut

// EXERCICE 6

let article = 9.99;
let quantity = 5;
let TVA = 0.2;

let total = (article*quantity)+TVA*(article*quantity);

console.log("Exercice 6 : \nPrix unitaire de l'article : "+article+" €\nQuantité : "+quantity+" \nTaux de TVA : "+TVA+" \nLe montant de la facture à régler est de : "+total.toFixed(2)+" €");

// EXERCICE 7

function catégorie(age) {
    if (age>=12) {
        console.log("L'enfant qui a "+age+" ans appartient à la catégorie « Cadet ».")
    } else if (age>=10) {
        console.log("L'enfant qui a "+age+" ans appartient à la catégorie « Minime ».")
    } else if (age>=8) {
        console.log("L'enfant qui a "+age+" ans appartient à la catégorie « Pupille ».")
    } else if (age>=6) {
        console.log("L'enfant qui a "+age+" ans appartient à la catégorie « Poussin ».")
    } else {
        console.log("L'enfant qui a "+age+" ans n'appartient à aucune catégorie.")
    }
}
console.log("Exercice 7 :")
catégorie(5);

let enfant = 10;

switch (true) {
    case enfant>=12:
        console.log("L'enfant qui a "+enfant+" ans appartient à la catégorie « Cadet ».");
        break ;
    case enfant>=10:
        console.log("L'enfant qui a "+enfant+" ans appartient à la catégorie « Cadet ».");
        break ;
    case enfant>=8:
        console.log("L'enfant qui a "+enfant+" ans appartient à la catégorie « Cadet ».");
        break ;
    case enfant>=6:
        console.log("L'enfant qui a "+enfant+" ans appartient à la catégorie « Cadet ».");
        break ;
    default:
        console.log("L'enfant qui a "+enfant+" ans appartient à la catégorie « Cadet ».");
}


// EXERCICE 8

let table = 5;

console.log("Exercice 8 \nTable de multiplication de "+ table +" : ");

for (let i = 1; i <=10 ; i++) {
    let resultat = table * i;
    console.log(table +" * "+ i +" = "+ resultat);
}

//version 2

console.log("\nVersion alternative\n");

let table2 = 6;
let j = 1;

while (j <=10) {
    console.log(table2 +" * "+ j +" = "+table2*j);
    j++;
}


// EXERCICE 9

console.log("\nExercice 9\n");

let age2 = 20;
let sexe ="F";

if (sexe == "F") {
    if (age2>35) {
        console.log("La personne est non imposable");
    } else if (age2<18) {
        console.log("La personne est non imposable");
    } else {
        console.log("La personne est imposable");
    }
} else if (sexe == "M") {
    if (age2>20) {
        console.log("La personne est imposable");
    } else {
        console.log("La personne est non imposable");
    }
}

// EXERCICE 10

let paye = 152;
let verse = 200;
let apaye = Math.abs(verse - paye);

let nbmonnaie       //variable pour stock 
console.log("Exercice 10 \nMontant à payer : "+paye+" € \nMontant versé : "+verse+" € \nReste à payer : "+apaye+" €")
for(let valeur of [20,10,5,2,1]){       //différent type de monnaie
    
    let type = valeur >= 5 ? "billet" : "pièce"     //détermine les variables billets et variables pièces
    nbmonnaie = Math.floor(apaye/valeur)

    type+= nbmonnaie > 1 ? "s" : "" // met au pluriel
    

    if (valeur > 1 && nbmonnaie > 0)
        console.log(`${nbmonnaie} ${type} de ${valeur}€`)
    else if (valeur < 1 && nbmonnaie > 0)
        console.log(`${nbmonnaie} ${type} de ${valeur*100} ${centime} d'€`)
    
    apaye = (apaye-(nbmonnaie*valeur)).toFixed(2)   //fixe la valeur à deux
    
}

// VERSION AVEC CENTIME

let du = 152.91
        let verse2 = 200
        let reste = verse2 - du 
        
        let nbmonnaie2
        console.log(reste)
        for(let valeur of [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]){
            
            let type = valeur >= 5 ? "billet" : "pièce"
            let centime = "centime"
            nbmonnaie2 = Math.floor(reste/valeur)

            type+= nbmonnaie2 > 1 ? "s" : ""
            centime += nbmonnaie2 > 1 ? "s" : ""

            if (valeur > 1 && nbmonnaie2 > 0)
                console.log(`${nbmonnaie2} ${type} de ${valeur}€`)
            else if (valeur < 1 && nbmonnaie2 > 0)
                console.log(`${nbmonnaie2} ${type} de ${valeur*100} ${centime} d'€`)
            
            reste = (reste-(nbmonnaie2*valeur)).toFixed(2)
            
        }


// EXERCICE 11

console.log("Exercice 11 \n Il y a 4 marques de voitures dans le tableau :");

let Marques = [ "Peugeot", "Renault", "BMW", "Mercedes"];

console.table(Marques);

// EXERCICE 12

// ne pas faire

// EXERCICE 13

console.log("Exercice 13 \nLes notes obtenues par l'élève sont : 10 12 8 19 3 16 11 13 9")

let arraynotes = [10, 12, 8, 19, 3, 16, 11, 13, 9]
        let noteslength //nombre de notes
        let summ        //somme
        function ArrayAvg(arraynotes){          //ArrayAvg : moyenne arithmétique
            let i = 0, summ = 0, noteslength = arraynotes.length
            while (i < noteslength) {   // boucle qui se répète tant que i n'est pas égal aux nombres de notes
                 summ += arraynotes[i++]
                
        }
            return (summ / noteslength).toFixed(2) // somme divisé par le nombre de notes || fixe la valeur à deux décimales 
        }
        let moyenne = ArrayAvg(arraynotes) 
        console.log("Sa moyenne générale est donc de : "+moyenne)

// EXERCICE 14

// ne pas faire

// EXERCICE 15

// ne pas faire