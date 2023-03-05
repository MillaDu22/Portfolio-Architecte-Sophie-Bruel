///////fetch recup works API///////
fetch ("http://localhost:5678/api/works")
.then (data => data.json())
.then (jsonListWork => {
    var html = document.querySelector ('.gallery');
    var data = document.querySelectorAll('.work');
    data.forEach(work => {
        html =+ "<figure>" + "<img>"+ "<figcation>" + "</figcaption>" + "</figure>";
    })
    document.getElementsByClassName('.work').innerHTML = html;
    console.log (jsonListWork);
});

///////fetch recup categories API///////
fetch ("http://localhost:5678/api/categories")
.then (data => data.json())
.then (jsonListCategory=> {
    console.log (jsonListCategory);
});

///tableau projets///
const imgHome =document.querySelectorAll('.figure-img');
const txtWorks = document.querySelectorAll('figcaption');
const works =document.querySelectorAll('.work') [
imgHome [0].src = 'http://localhost:5678/images/abajour-tahina1651286843956.png',
txtWorks[0].innerHTML = 'Abat-jour - Tahina',

imgHome [1].src = 'http://localhost:5678/images/appartement-paris-v1651287270508.png',
txtWorks[1].innerHTML = 'Appartement - Paris V',

imgHome [2].src = 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png',
txtWorks[2].innerHTML = 'Restaurant Sushisen - Londres',

imgHome [3].src = 'http://localhost:5678/images/la-balisiere1651287350102.png',
txtWorks[3].innerHTML = 'Villa "La Balisiere" - Port-Louis',

imgHome [4].src = 'http://localhost:5678/images/structures-thermopolis1651287380258.png',
txtWorks[4].innerHTML = 'Structures Thermopolis',

imgHome [5].src = 'http://localhost:5678/images/appartement-paris-x1651287435459.png',
txtWorks[5].innerHTML = 'Appartement - Paris X',

imgHome [6].src = 'http://localhost:5678/images/le-coteau-cassis1651287469876.png',
txtWorks[6].innerHTML = 'Pavillon "Le coteau" - Cassis',

imgHome [7].src = 'http://localhost:5678/images/villa-ferneze1651287511604.png',
txtWorks[7].innerHTML = 'Villa Ferneze - Isola d Elba',

imgHome [8].src = 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png',
txtWorks[8].innerHTML = 'Appartement - Paris XVIII',

imgHome [9].src = 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png',
txtWorks[9].innerHTML = 'Bar "Lullaby" - Paris',

imgHome [10].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png',
txtWorks[10].innerHTML = 'Hôtel First Arte - New Delhi',

imgHome [11].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png',
txtWorks[11].innerHTML = 'Malt & Juniper - New-York'
]




/////Login connexion////////////////
const ajoutPage = document.getElementById('ajoutWind');
ajoutPage.style.visibility = 'hidden';
const GalleryEdition = document.getElementById('GalleryWindow');
GalleryEdition.style.visibility = 'hidden';
const ModeEdition = document.getElementById('ModeEdition');
ModeEdition.style.visibility = 'hidden';
const btnFilters = document.getElementById('btnFilters');
btnFilters.style.visibility = 'visible';
const connected = document.getElementById('submit');

//connected.addEventListener('click', SeConnecter);
//function cachAff()

function SeConnecter() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ( username == "" || username !== "sophie.bluel@test.tld") {
        alert("Erreur dans l'dentifiant ou le mot de passe.");
        ModeEdition.style.visibility = 'hidden';
        btnFilters.style.visibility = 'visible';
        return false ;
    }
    if ( password == "" ||  password !== "S0phie") {
        alert("Erreur dans l'identifiant ou le mot de passe.");
        return false;
    }
    else if ( username == 'sophie.bluel@test.tld' || password == 'S0phie') {
    alert('Identifiant et mot de passe corrects');
    window.location=('./index.html');
    ModeEdition.style.visibility = 'visible';
    btnFilters.style.visibility = 'hidden';
    document.getElementById('logout').innnerHTML='Logout';
    return true;
    };
};
SeConnecter;

///////Fin login connexion/////////////



///Filters
const showAllTab = document.querySelector('.tous');
const showObjectTab = document.querySelector('.objet');
const showAppartementTab = document.querySelector('.appart');
const showRestaurantTab = document.querySelector('.resto');
const allFilteredFigs = document.querySelectorAll('.filtered-fig');
const allFilteredFigsArray = Array.from(allFilteredFigs);

showAllTab.addEventListener('click', showAll)
function showAll() {
    allFilteredFigsArray.forEach(figure => {
        figure.classList.remove('remove')
        figure.classList.add('show')
    })
};
showObjectTab.addEventListener('click', showObjects)
function showObjects(){
    allFilteredFigsArray.forEach(figure => {
        figure.classList.remove('remove')

        if(!figure.dataset.objet) {
            figure.classList.add('remove')
        }
    })
};
showAppartementTab.addEventListener('click', showAppartements)
function showAppartements(){
    allFilteredFigsArray.forEach(figure => {
        figure.classList.remove('remove')

        if (!figure.dataset.appartement) {
            figure.classList.add('remove')
        }
    })
};
showRestaurantTab.addEventListener('click', showRestaurants)
function showRestaurants() {
    allFilteredFigsArray.forEach(figure => {
        figure.classList.remove('remove')

        if (!figure.dataset.restaurant) {
            figure.classList.add('remove')
        }
    })
};

////////Tableau Gallery////////////////////////////
const imgEdit =document.querySelectorAll('.photo-edit');
const pEdit = document.querySelectorAll('.pGalleryEdit');
const worksEdit = document.querySelectorAll('.photoEdit') [
imgEdit [0].src = 'http://localhost:5678/images/abajour-tahina1651286843956.png',
pEdit[0].innerHTML = 'éditer',

imgEdit [1].src = 'http://localhost:5678/images/appartement-paris-v1651287270508.png',
pEdit[1].innerHTML = 'éditer',

imgEdit [2].src = 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png',
pEdit[2].innerHTML = 'éditer',

imgEdit [3].src = 'http://localhost:5678/images/la-balisiere1651287350102.png',
pEdit[3].innerHTML = 'éditer',

imgEdit [4].src = 'http://localhost:5678/images/structures-thermopolis1651287380258.png',
pEdit[4].innerHTML = 'éditer',

imgEdit [5].src = 'http://localhost:5678/images/appartement-paris-x1651287435459.png',
pEdit[5].innerHTML = 'éditer',

imgEdit [6].src = 'http://localhost:5678/images/le-coteau-cassis1651287469876.png',
pEdit[6].innerHTML = 'éditer',

imgEdit [7].src = 'http://localhost:5678/images/villa-ferneze1651287511604.png',
pEdit[7].innerHTML = 'éditer',

imgEdit [8].src = 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png',
pEdit[8].innerHTML = 'éditer',

imgEdit [9].src = 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png',
pEdit[9].innerHTML = 'éditer',

imgEdit [10].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png',
pEdit[10].innerHTML = 'éditer'
];

//////Fermeture galley edit////////
////////Glissé déposé
    /*glisseDepose.addEventListener('dragstart',fonction_dragstart,false);
    glisseDepose.addEventListener('dragend',fonction_dragend,false);
    function fonction_dragstart(ev){
        document.getElementById('').innerHTML = ""+ev.target.id;
        this.style.opacity=0.2;
    }
    function fonction_dragend(ev){
        ev.preventDefault();
        document.getElementById('').innerHTML = ""+ev.target.id;
        this.style.opacity=1;
    }
    function fonction_dragstart(ev){
        var id = ev.target.id;
        document.getElementById('').innerHTML=""+id;
        this.style.opacity=0.2;
        ev.dataTransfer.setData("",ev.target.id);
    }    

    var cible = document.getElementById('')
    cible.addEventListener('dragover',fonction_dragover,false);
    cible.addEventListener('drop',fonction_drop,false);
    function fonction_dragover(ev){
        ev.preventDefault();
    }    
    function fonction_drop(ev){
        ev.preventDefault();
        var data=ev.dataTransfer.getData('');
        ev.target.appendChild(document.getElementById(data));
    }*/ 








