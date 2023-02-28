///////fetch recup works API///////
fetch ("http://localhost:5678/api/works")
.then (data => data.json())
.then (jsonListWork => {
    console.log (jsonListWork);
});

///////fetch recup categories API///////
fetch ("http://localhost:5678/api/categories")
.then (data => data.json())
.then (jsonListCategory=> {
    console.log (jsonListCategory);
});

///tableau img HomePage///
const imgHome =document.querySelectorAll('.figure-img');
imgHome [0].src = 'http://localhost:5678/images/abajour-tahina1651286843956.png';
imgHome [1].src = 'http://localhost:5678/images/appartement-paris-v1651287270508.png';
imgHome [2].src = 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png';
imgHome [3].src = 'http://localhost:5678/images/la-balisiere1651287350102.png';
imgHome [4].src = 'http://localhost:5678/images/structures-thermopolis1651287380258.png';
imgHome [5].src = 'http://localhost:5678/images/appartement-paris-x1651287435459.png';
imgHome [6].src = 'http://localhost:5678/images/le-coteau-cassis1651287469876.png';
imgHome [7].src = 'http://localhost:5678/images/villa-ferneze1651287511604.png';
imgHome [8].src = 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png';
imgHome [9].src = 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png';
imgHome [10].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png';
imgHome [11].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png';
/////tableau innerHTML HomePage/////
const txtWorks = document.querySelectorAll('figcaption');
txtWorks[0].innerHTML = 'Abat-jour - Tahina';
txtWorks[1].innerHTML = 'Appartement - Paris V';
txtWorks[2].innerHTML = 'Restaurant Sushisen - Londres';
txtWorks[3].innerHTML = 'Villa "La Balisiere" - Port-Louis';
txtWorks[4].innerHTML = 'Structures Thermopolis';
txtWorks[5].innerHTML = 'Appartement - Paris X';
txtWorks[6].innerHTML = 'Pavillon "Le coteau" - Cassis';
txtWorks[7].innerHTML = 'Villa Ferneze - Isola d Elba';
txtWorks[8].innerHTML = 'Appartement - Paris XVIII';
txtWorks[9].innerHTML = 'Bar "Lullaby" - Paris';
txtWorks[10].innerHTML = 'Hôtel First Arte - New Delhi';
txtWorks[11].innerHTML = 'Malt & Juniper - New-York';



/////Login connexion////////////////
function SeConnecter() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if ( username == "" || username !== "sophie.bluel@test.tld") {
        alert("Erreur dans l'dentifiant ou le mot de passe.");
        return false;
    }
    if ( password == "" ||  password !== "S0phie") {
        alert("Erreur dans l'identifiant ou le mot de passe.");
        return false;
    }
    if ( username == "sophie.bluel@test.tld" || password == "S0phie")
    alert('Identifiant et mot de passe corrects');
    window.location=('./index.html');
};
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
///////GalleryEdit/////////////////////////////////////////////

////////Tableau photos GalleryEdit////////////////////////////
const imgEdit =document.querySelectorAll('.photo-edit');
imgEdit [0].src = 'http://localhost:5678/images/abajour-tahina1651286843956.png';
imgEdit [1].src = 'http://localhost:5678/images/appartement-paris-v1651287270508.png';
imgEdit [2].src = 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png';
imgEdit [3].src = 'http://localhost:5678/images/la-balisiere1651287350102.png';
imgEdit [4].src = 'http://localhost:5678/images/structures-thermopolis1651287380258.png';
imgEdit [5].src = 'http://localhost:5678/images/appartement-paris-x1651287435459.png';
imgEdit [6].src = 'http://localhost:5678/images/le-coteau-cassis1651287469876.png';
imgEdit [7].src = 'http://localhost:5678/images/villa-ferneze1651287511604.png';
imgEdit [8].src = 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png';
imgEdit [9].src = 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png';
imgEdit [10].src = 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png';
//////////Fin tableau GalleryEdit/////////////////////////////////

/////tableau innerHTML  Gallery Edit/////
const pEdit = document.querySelectorAll('.pGalleryEdit');
pEdit[0].innerHTML = 'éditer';
pEdit[1].innerHTML = 'éditer';
pEdit[2].innerHTML = 'éditer';
pEdit[3].innerHTML = 'éditer';
pEdit[4].innerHTML = 'éditer';
pEdit[5].innerHTML = 'éditer';
pEdit[6].innerHTML = 'éditer';
pEdit[7].innerHTML = 'éditer';
pEdit[8].innerHTML = 'éditer';
pEdit[9].innerHTML = 'éditer';
pEdit[10].innerHTML = 'éditer';



