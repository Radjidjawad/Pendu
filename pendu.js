// Définir le tableau :

var listes = ['pablo', 'mort', 'yoga','paris','banane','tomate',
                   'fille','cyrano','javascript','iphone','cymole',
                    'france','pain'];


var tab = [];

//image

var image = ["images/img1.jpg",
           "images/img2.jpg", 
           "images/img3.jpg", 
           "images/img4.jpg", 
           "images/img5.jpg", 
           "images/img6.jpg", 
           "images/img7.jpg", 
           "images/img8.jpg", 
           "images/img9.jpg", 
           "images/img10.jpg", 
           "images/img11.jpg"];


// Choisir un mot random parmi les choix du tableau :

var random = listes[Math.floor(Math.random()*listes.length)];

// Variables :

var victoire = 0;
var vie = 0;


// Fonction reset et focus :


function reset()
{
    document.getElementById('answer').value = '';
}

function focus () {
    document.getElementById('answer').focus();
}


// fonction verif :

function verif() {
for (var g = 0; g < tab.length ; g++) {
        if(mot == tab[g])
            return true ;
    }
}


// Fonction du jeu pendu :

var mot = document.getElementById('answer').value;


document.getElementById('send').addEventListener("click",

    function() {

         mot = document.getElementById('answer').value;

        if(!verif()) {

            for (var i = 0; i < random.length; i++) {


                console.log(random);


                if (mot == random[i]) {


                    document.getElementById('lettre' + i).innerHTML = mot;
                    tab.push(mot);
                    console.log(tab);
                    victoire++;
                }


                else {
                    document.getElementById('Indication').innerHTML = '';
                }

                if (random.length === victoire) {
                    document.getElementById('win').innerHTML = "You Win!!";
                    document.getElementById('win').style.color = 'green';
                    

                }
            }

            reset();


            if (random.indexOf(mot) === -1) {
                document.getElementById('Indication').innerHTML = "La lettre entrée n'est pas dans le mot cherché";
                vie++;
                console.log(vie)
                //document.getElementById('Img').src=image[vie];
                document.querySelector('#Img').src=image[vie];

            }
            document.getElementById('luck').innerHTML = 'Vous avez utilisé ' + ' ' + vie + ' ' + ' vies sur 11';
            
            if (vie >= 11) {
                document.getElementById('Indication').innerHTML = "You loose!";
                document.getElementById('Indication').style.color = 'white';
                document.getElementById('Indication').style.backgroundColor = 'black';
               
            }

            focus();

        }}) ;

// boucle pour cacher le mot random :

for (var i= 0; i < random.length;i++) {
    document.getElementById('lettre' + i).innerHTML= '_ ';
}



// Fonction reset page  :

document.getElementById('buttonR').addEventListener("click",
function resette ()
{
    document.location.reload(true)

});