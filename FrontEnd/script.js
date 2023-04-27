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

//////////////////////////////////////////////////////////////// Affichage homepage connectée ///////////////////////////////////////////////////
const iconPen1 = document.querySelector('.iconPen1');
const iconPen2 = document.querySelector('.iconPen2');
const iconPen3 = document.querySelector('.iconPen3');
const login = document.querySelector('.aLogin');
const logout = document.querySelector('.aLogout');
const filtres = document.querySelector('.filterBtns');

function displayPageConnected(){
    if (localStorage.getItem('token')) {
    displayEditMod.style.display='flex';
    iconPen3.style.visibility='visible';
    iconPen2.style.visibility='visible';
    iconPen1.style.visibility='visible';
    filtres.style.display='none';
    logout.style.display="flex";
    login.style.display="none";
    }
}
displayPageConnected();

/////////////////////////////////////////////////////////// Ouverture modale gallery ///////////////////////////////////////////////////////
const ButtonModif = document.querySelector('.lienGallery');
const galleryEdit = document.querySelector('.galleryEdit');
function openModale() {
    ButtonModif.addEventListener('click', function(e) {
        e.preventDefault()
        galleryEdit.style.display="flex";
    });
}
openModale();
/////////////////////////////////////////////////////////// Ouverture modale Uploader //////////////////////////////////////////////////////
const btnAjoutGallery = document.querySelector('.ajoutEdit');
const next = document.querySelector('.ajout');
function openNextWindow() {
    btnAjoutGallery.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.display="flex";
        galleryEdit.style.display="none";
    });
}
openNextWindow();
//////////////////////////////////////////////////////  <-- Fleche retourModale 2 vers Modale Gallery //////////////////////////////////////
const returnToGallery = document.querySelector('.returnToGallery');
function retourModaleGallery() {
    returnToGallery.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.display="none";
        galleryEdit.style.display="flex";
    });
}
retourModaleGallery();

///////////////////////////////////////////////////// X Fermeture de Modale 2 /////////////////////////////////////////////////////////////
const XbtnModale2 = document.querySelector('.XBtnModale2');
function closeModaleAjout() {
    XbtnModale2.addEventListener('click', function(e) {
        e.preventDefault();
        next.style.display="none";
        window.location=('./index.html');
    });
}
closeModaleAjout();

////////////////////////////////////////////////////////////// X de fermeture Modale Gallery //////////////////////////////////////////////
const XGalleryModale =document.querySelector('.XGalleryModale');
function closeGalleryEdition() {
    XGalleryModale.addEventListener('click', function(e) {
        e.preventDefault()
    galleryEdit.style.display="none";
    window.location=('./index.html');
    });
}
closeGalleryEdition();

////////////////////////////////////////////////////// Fermeture de la modale Gallery "click à coté" ////////////////////////////////////////
const sideClickCloseModGallery = document.querySelector('.galleryEdit');
function sideClickCloseModale1() {
    sideClickCloseModGallery.addEventListener('click', function(e) {
        e.preventDefault()
        galleryEdit.style.display="none";
        window.location=('./index.html');
    });
}
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
        next.style.display="none";
        window.location=('./index.html');
    });
}
sideClickCloseModale2();

const windowAjout = document.querySelector('.windowAjout');
windowAjout.addEventListener('click', stopped )

function stopped(e) {
    e.stopPropagation()
}

////////////////////////////////////////////////////// Se deconnecter //////////////////////////////////////////////////////////////////////

function SeDeconnecter() {
    logout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location = ("./index.html")
    });
}
SeDeconnecter();
















