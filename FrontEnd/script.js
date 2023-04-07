//////////////////////////////////// Création de la Barre au dessus du header /////////////////////////////////////////////////////////////////

const displayEditMod = document.querySelector('.editMod');
const iconSquare = document.createElement('i');
iconSquare.className = "fa-regular fa-pen-to-square";
const pBarre = document.createElement('p');
pBarre.className ='pBarre';
pBarre.innerHTML = 'Mode édition';
pBarre.style.color="white";
const buttonBarre =document.createElement('Button');
buttonBarre.innerHTML = 'Publier les changements';
buttonBarre.className='changePost';
displayEditMod.appendChild(iconSquare);
displayEditMod.appendChild(pBarre);
displayEditMod.appendChild(buttonBarre);


////////////////////////////////////////////////// creation boutons filtrage /////////////////////////////////////////////////////////////////
const btns = document.getElementById('btnFilters')
const urlCategories = "http://localhost:5678/api/categories";

const btnTous = document.createElement('button');
btnTous.className ="btnFilter tous";
btnTous.innerText='Tous';
btns.appendChild(btnTous);

const btnObjets = document.createElement('button');
btnObjets.className ="btnFilter objets";
btnObjets.innerText='Objets';
btns.appendChild(btnObjets);

const btnAppartements = document.createElement('button');
btnAppartements.className ="btnFilter appartements";
btnAppartements.innerText='Appartements';
btns.appendChild(btnAppartements);

const btnRestaurants = document.createElement('button');
btnRestaurants.className ="btnFilter restaurants";
btnRestaurants.innerText='Hôtels & restaurants';
btns.appendChild(btnRestaurants);

//////////////////////////////////////////////////////////// Fetch Works //////////////////////////////////////////////////////////////////////

const projets = document.getElementById('projects');
const urlWorks = "http://localhost:5678/api/works";

const getWorks = () => {
    fetch (urlWorks)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        console.log(data)
    });
};
getWorks();
//////////////////////////////////////////////////////////////// Affichage homepage connectée ///////////////////////////////////////////////////
const iconPen1 = document.querySelector('.iconPen1');
const iconPen2 = document.querySelector('.iconPen2');
const iconPen3 = document.querySelector('.iconPen3');
const login = document.querySelector('.aLogin');
const logout = document.querySelector('.aLogout');
const filtres = document.querySelector('.filterBtns');

function displayPageConnected(){
    if (localStorage.getItem('token')) {
    displayEditMod.style.visibility='visible';
    iconPen3.style.visibility='visible';
    iconPen2.style.visibility='visible';
    iconPen1.style.visibility='visible';
    //filtres.style.display='none';
    logout.style.display="flex";
    login.style.display="none";
    }
};
displayPageConnected();

/////////////////////////////////////////////////////////// Ouverture modale gallery ///////////////////////////////////////////////////////
const galleryEdit = document.querySelector('.galleryEdit');
function openModale() {
    buttonBarre.addEventListener('click', function(e) {
        e.preventDefault()
        galleryEdit.style.visibility='visible';
    });
};
openModale();
/////////////////////////////////////////////////////////// Ouverture modale Uploader //////////////////////////////////////////////////////
const btnAjoutGallery = document.querySelector('.ajoutEdit');
const next = document.querySelector('.ajout');
function openNextWindow() {
    btnAjoutGallery.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.visibility="visible";
        galleryEdit.style.visibility="hidden";
    });
};
openNextWindow();
//////////////////////////////////////////////////////  <-- Fleche retourModale 2 vers Modale Gallery //////////////////////////////////////
const returnToGallery = document.querySelector('.returnToGallery');
function retourModaleGallery() {
    returnToGallery.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.visibility="hidden";
        galleryEdit.style.visibility="visible";
    });
};
retourModaleGallery();

///////////////////////////////////////////////////// X Fermeture de Modale 2 /////////////////////////////////////////////////////////////
const XbtnModale2 = document.querySelector('.XBtnModale2');
function closeModaleAjout() {
    XbtnModale2.addEventListener('click', function(e) {
        e.preventDefault();
        next.style.visibility="hidden";
    });
};
closeModaleAjout();

////////////////////////////////////////////////////////////// X de fermeture Modale Gallery //////////////////////////////////////////////
const XGalleryModale =document.querySelector('.XGalleryModale');
function closeGalleryEdition() {
    XGalleryModale.addEventListener('click', function(e) {
        e.preventDefault()
    galleryEdit.style.visibility="hidden";
    });
};
closeGalleryEdition();


////////////////////////////////////////////////////// Fermeture de la modale Gallery "click à coté" ////////////////////////////////////////
const sideClickCloseModGallery = document.querySelector('.galleryEdit');
function sideClickCloseModale1() {
    sideClickCloseModGallery.addEventListener('click', function(e) {
        e.preventDefault()
        galleryEdit.style.visibility="hidden";
    });
};
sideClickCloseModale1();

const windowEdit = document.querySelector('.windowEdit');
windowEdit.addEventListener('click', stop )

function stop(e) {
    e.stopPropagation()
}



////////////////////////////////////////////////////// Fermeture de la modale 2 Ajout "click à coté" /////////////////////////////////////

const sideClickAjout = document.querySelector('#ajoutWind');
function sideClickCloseModale2() {
    sideClickAjout.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.visibility="hidden";
    });
};
sideClickCloseModale2();

const windowAjout = document.querySelector('.windowAjout');
windowAjout.addEventListener('click', stopped )

function stopped(e) {
    e.stopPropagation()
}

////////////////////////////////////////////////////// Se deconnecter //////////////////////////////////////////////////////////////////////
const token = localStorage.getItem('token')
function SeDeconnecter() {
    logout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.href = "http://127.0.0.1:5500/FrontEnd/index.html"
    });
};
SeDeconnecter();
















