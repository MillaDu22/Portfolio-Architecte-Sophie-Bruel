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
imgHome [0].src = "./assets/images/abajour-tahina.png";
imgHome [1].src = "./assets/images/appartement-paris-v.png";
imgHome [2].src = "./assets/images/restaurant-sushisen-londres.png";
imgHome [3].src = "./assets/images/la-balisiere.png";
imgHome [4].src = "./assets/images/structures-thermopolis.png";
imgHome [5].src = "./assets/images/appartement-paris-x.png";
imgHome [6].src = "./assets/images/le-coteau-cassis.png";
imgHome [7].src = "./assets/images/villa-ferneze.png";
imgHome [8].src = "./assets/images/appartement-paris-xviii.png";
imgHome [9].src = "./assets/images/bar-lullaby-paris.png";
imgHome [10].src = "./assets/images/hotel-first-arte-new-delhi.png";
imgHome [11].src = "./assets/images/hotel-first-arte-new-delhi.png";
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



/////Login connexion///////


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
imgEdit [0].src = "./assets/images/abajour-tahina.png";
imgEdit [1].src = "./assets/images/appartement-paris-v.png";
imgEdit [2].src = "./assets/images/restaurant-sushisen-londres.png";
imgEdit [3].src = "./assets/images/la-balisiere.png";
imgEdit [4].src = "./assets/images/structures-thermopolis.png";
imgEdit [5].src = "./assets/images/appartement-paris-x.png";
imgEdit[6].src = "./assets/images/le-coteau-cassis.png";
imgEdit [7].src = "./assets/images/villa-ferneze.png";
imgEdit [8].src = "./assets/images/appartement-paris-xviii.png";
imgEdit [9].src = "./assets/images/bar-lullaby-paris.png";
imgEdit [10].src = "./assets/images/hotel-first-arte-new-delhi.png";
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



