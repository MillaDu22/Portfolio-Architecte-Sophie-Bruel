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
        /*for(works in data) {
            projets.innerHTML += `<figure class ="figure" data-figure="" id="figure">
            <img src= "${data[works].imageUrl}" alt="${data[works].altTxt}"/>
            <figcaption id="figcaption">${data[works].title}</figcaption>
            </figure>`
        }*/
    });
};
getWorks()

////////////////////////////////////////////////////////////////// Fetch Catégories /////////////////////////////////////////////////////////////////
const btns = document.getElementById('btnFilters')
const urlCategories = "http://localhost:5678/api/categories";
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
getCategories()

////////////////////////////////////////////////////////// Affichage après delete ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////// Ouverture modale gallery ///////////////////////////////////////////////////////////////
const galleryEdit = document.querySelector('.galleryEdit');
function openModale() {
    galleryEdit.style.visibility='visible';
};

/////////////////////////////////////////////////////////// Ouverture modale Uploader ///////////////////////////////////////////////////////////////
const next = document.querySelector('.ajout');
function openNextWindow() {
    next.style.visibility="visible";
    galleryEdit.style.visibility="hidden";
};

////////////////////////////////////////////////////////////// X de fermeture Modale Gallery ////////////////////////////////////////////////////////////////////////


function closeGalleryEdition(){
    galleryEdit.style.visibility="hidden";
};
closeGalleryEdition();

//////////////////////////////////////////////////////  <-- Fleche retourModale 2 vers Modale Gallery ////////////////////////////////////////////////////////////////////
function retourModaleGallery() {
    next.style.visibility="hidden";
    galleryEdit.style.visibility="visible";
};
retourModaleGallery();
///////////////////////////////////////////////////// X Fermeture de Modale 2 ///////////////////////////////////////////////////////////////////////

function closeModaleAjout() {
    next.style.visibility="hidden";
    galleryEdit.style.visibility="hidden";
}
closeModaleAjout();















