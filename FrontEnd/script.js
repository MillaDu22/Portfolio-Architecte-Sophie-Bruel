////////////////////////////////////Création de la Barre au dessus du header//////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////Fetch Works /////////////////////////////////////////////////////////////////////////////////

const projets = document.getElementById('projects');
const urlWorks = "http://localhost:5678/api/works";

const getWorks = () => {
    fetch (urlWorks)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        console.log(data)
        for(works in data) {
            projets.innerHTML += `<figure class ="figure" data-figure="" id="figure">
            <img src= "${data[works].imageUrl}" alt="${data[works].altTxt}"/>
            <figcaption id="figcaption">${data[works].title}</figcaption>
            </figure>`
        }
    });
};
getWorks();

////////////////////////////////////////////////////////////////// Fetch Catégories /////////////////////////////////////////////////////////////////
const btns = document.getElementById('btnFilters')
const urlCategories = "http://localhost:5678/api/categories";

const btnTous = document.createElement('button');
btnTous.className ="btnFilter tous";
btnTous.innerText='Tous';
btns.appendChild(btnTous);

const getCategories =() => {
    fetch (urlCategories)
    .then (function (response) {
        return response.json()
    })
    .then(function (data){
        console.log(data);
        /*for(categories in data) {
            btns.innerHTML +=  `<button type = 'button' class = 'btnFilter' onclick ='filterFigures();'>${data[categories].name}</button>`
        }*/
    });
};
getCategories();

////////////////////////////////////////////////////////////////Affichage homepage connectée////////////////////////////////////////////////////////
const iconPen1 = document.querySelector('.iconPen1');
const iconPen2 = document.querySelector('.iconPen2');
const iconPen3 = document.querySelector('.iconPen3');
const login = document.querySelector('.aLogin');
const logout = document.querySelector('.aLogout');
const filtres = document.querySelector('.filterBtns');

function displayPageConnected(){
    displayEditMod.style.visibility='visible';
    iconPen3.style.visibility='visible';
    iconPen2.style.visibility='visible';
    iconPen1.style.visibility='visible';
    //filtres.style.display='none';
    logout.style.display="flex";
    login.style.display="none";
};
displayPageConnected();

/////////////////////////////////////////////////////////// Ouverture modale gallery ///////////////////////////////////////////////////////////////
const galleryEdit = document.querySelector('.galleryEdit');
function openModale() {
    buttonBarre.addEventListener('click', function(e) {
        e.preventDefault()
        galleryEdit.style.visibility='visible';
    });
};
openModale();
/////////////////////////////////////////////////////////// Ouverture modale Uploader ///////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////  <-- Fleche retourModale 2 vers Modale Gallery ////////////////////////////////////////////////////////////////////
const returnToGallery = document.querySelector('.returnToGallery');
function retourModaleGallery() {
    returnToGallery.addEventListener('click', function(e) {
        e.preventDefault()
        next.style.visibility="hidden";
        galleryEdit.style.visibility="visible";
    });
};
retourModaleGallery();

///////////////////////////////////////////////////// X Fermeture de Modale 2 ///////////////////////////////////////////////////////////////////////
const XbtnModale2 = document.querySelector('.XBtnModale2');
function closeModaleAjout() {
    XbtnModale2.addEventListener('click', function(e) {
        e.preventDefault();
        next.style.visibility="hidden";
        e.stopPropagation();
    });
};
closeModaleAjout();

////////////////////////////////////////////////////////////// X de fermeture Modale Gallery ////////////////////////////////////////////////////////////////////////
const XGalleryModale =document.querySelector('.XGalleryModale');
function closeGalleryEdition() {
    XGalleryModale.addEventListener('click', function(e) {
        e.preventDefault()
    galleryEdit.style.visibility="hidden";
    e.stopPropagation();
    });
};
closeGalleryEdition();


////////////////////////////////////////////////////// Fermeture de la modale Gallery click à coté ///////////////////////////////////////////////
const sideClickCloseModGallery =document.querySelector('#GalleryWindow');
function sideClickCloseModale() {
    sideClickCloseModGallery.addEventListener('click', function(e) {
        e.preventDefault()
    galleryEdit.style.visibility="hidden";
    e.stopPropagation();
    });
};
sideClickCloseModale();

//////////////////////////////////////////////////////Se deconnecter///////////////////////////////////////////////////////////////////////////
const token = localStorage.getItem('token')
function SeDeconnecter() {
    logout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location('./index.html');
        filtres.style.display='flex';
        logout.style.display="none";
        login.style.display="flex";
        displayEditMod.style.visibility='hidden';
        iconPen3.style.visibility='hidden';
        iconPen2.style.visibility='hidden';
        iconPen1.style.visibility='hidden';
        e.stopPropagation();
    });
};
SeDeconnecter();
















