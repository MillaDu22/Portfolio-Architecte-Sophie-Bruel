
/////////////////////////////////////////////////////////////Works/////////////////////////////////////////////////////////////////////////////////
const projets = document.getElementById('projects');
const urlWorks = "http://localhost:5678/api/works";

const getWorks = () => {
    fetch (urlWorks)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        console.log(data);
        for(figure in data) {
            projets.innerHTML += `<figure class ="figure" data-figure="" id="figure">
            <img src= "${data[figure].imageUrl}" alt="${data[figure].altTxt}"/>
            <figcaption id="figcaption">${data [figure].title}</figcaption>
        </figure>`
        }
    });
};
getWorks()


//////////////////////////////////////////////////////////////////Catégories /////////////////////////////////////////////////////////////////
const urlCategories = "http://localhost:5678/api/categories";
const getCategories =() => {
    fetch (urlCategories)
    .then (function (response) {
        return response.json()
    })
    .then(function (data){
    console.log(data);
    });
};
getCategories()

///////////////////////////////////////////////////////Filtrage///////////////////////////////////////////////////////////////////////////////////////

let works = [
    {"id": 1, "title": "Abajour Tahina", "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png", "categoryId": 1, "categoryName": "Objets", "userId": 1},
    {"id": 2, "title": "Appartement Paris V", "imageUrl": "http://localhost:5678/images/appartement-paris-v1651287270508.png", "categoryId": 2, "CategoryName": "Appartements", "userId": 1},
    {"id": 3, "title": "Restaurant Sushisen - Londres", "imageUrl": "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png", "categoryId": 3, "categoryName": "Hotels & restaurants", "userId": 1},
    {"id": 4, "title": "Villa La Balisiere - Port Louis", "imageUrl": "http://localhost:5678/images/la-balisiere1651287350102.png", "categoryId": 2, "categoryName": "Appartements", "userId": 1},
    {"id": 5, "title": "Structures Thermopolis", "imageUrl": "http://localhost:5678/images/structures-thermopolis1651287380258.png", "categoryId": 1, "categoryName": "Objets", "userId": 1},
    {"id": 6, "title": "Appartement Paris X", "imageUrl": "http://localhost:5678/images/appartement-paris-x1651287435459.png", "categoryId": 2, "categoryName": "Appartements", "userId": 1},
    {"id": 7, "title": "Pavillon Le coteau - Cassis", "imageUrl": "http://localhost:5678/images/le-coteau-cassis1651287469876.png", "categoryId": 2, "categoryName":"Appartements", "userId": 1},
    {"id": 8, "title": "Villa Ferneze - Isola d’Elba", "imageUrl": "http://localhost:5678/images/villa-ferneze1651287511604.png", "categoryId": 2, "categoryName": "Appartements",  "userId": 1},
    {"id": 9, "title": "Appartement Paris XVIII", "imageUrl": "http://localhost:5678/images/appartement-paris-xviii1651287541053.png", "categoryId": 2, "categoryName": "Appartements", "userId": 1},
    {"id": 10, "title": "Bar “Lullaby” - Paris", "imageUrl": "http://localhost:5678/images/bar-lullaby-paris1651287567130.png", "categoryId": 3, "categoryName": "Hotels & restaurants", "userId": 1},
    {"id": 11, "title": "Hotel First Arte - New Delhi", "imageUrl": "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png", "categoryId": 3, "categoryName":"Hotels & restaurants", "userId": 1}
] ;

const btn = document.querySelectorAll('.btnFilter');
function filtrage() {

    function activeBtn(){
        btn.forEach((btn) => btn.classList.remove('active'));
      //document.querySelector(`.btnFilter[data-btn="${btn}"]`).classList.add('active');
    }
    activeBtn();

    const filterAll = document.querySelector('.tous')
    filterAll.addEventListener('click', showAll)
    function showAll() {
        let Tous = works.filter(elements => {
        return elements.categoryName !=="" 
        })
        activeBtn();
        console.log(Tous);
    }   
    showAll();


    const filterObjets = document.querySelector('.objets')
    filterObjets.addEventListener('click', showObjets)
    function showObjets() {
        let Objets = works.filter(elements => {
            return elements.categoryId !== 2 && elements.categoryId !== 3
        })
        activeBtn();
        console.log(Objets);
    }
    showObjets();


    const filterAppartements = document.querySelector('.apparts')
    filterAppartements.addEventListener('click', showAppartements)
    function showAppartements(){
        let Appartements = works.filter(elements => {
            return elements.categoryId !== 1 &&  elements.categoryId !== 3
        })
        activeBtn();
        console.log(Appartements);
    }
    showAppartements()

    const filterRestaurants = document.querySelector('.restos')
    filterRestaurants.addEventListener('click', showRestaurants)
    function showRestaurants(){
        let Restaurants = works.filter(elements => {
            return elements.categoryId !== 1 &&  elements.categoryId !== 2
        })
        activeBtn();
        console.log(Restaurants);
    }
    showRestaurants()
}
filtrage()


//////////////////////////////////////////////////////////////////Login connexion///////////////////////////////////////////////////////////////


function SeConnecter() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ( username == "" || username !== "sophie.bluel@test.tld") {
        alert("Erreur dans l'dentifiant ou le mot de passe.");
        return false ;
    }
    if ( password == "" ||  password !== "S0phie") {
        alert("Erreur dans l'identifiant ou le mot de passe.");
        return false;
    }
    else if ( username == 'sophie.bluel@test.tld' || password == 'S0phie') {
    alert('Identifiant et mot de passe corrects');
    window.location=('./index.html');
    return true;
    };
}
SeConnecter;



/////////////////////////////////////////////////////////////////Tableau Gallery///////////////////////////////////////////////////////////////////
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



////////////////////////////////////////////////////////////////Uploader/////////////////////////////////////////////////////////////////////

const image_input = document.querySelector("#image_input");
image_input.style.opacity= 0;

var uploaded_image ="";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").getElementsByClassName.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})





