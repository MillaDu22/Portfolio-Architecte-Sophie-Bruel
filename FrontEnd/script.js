
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
    });
};
getWorks()



//////////////////////////////////////////////////////////////////Catégories /////////////////////////////////////////////////////////////////
const btns = document.getElementById('btnFilters')
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

///////////////////////////////////////////////////////////Filtrage///////////////////////////////////////////////////////////////////////////////
const boutons = [{allId: "Tous", name: 'Tous'}, {id: 1, name:'Objets'}, {id:2, name: 'Appartements'}, {id: 3, name: 'Hotels & restaurants'} ];
const filters = [...new Set ( boutons.map (( bouton ) => {
    return bouton
    }
))]

document.getElementById('btnFilters').innerHTML=filters.map((bouton) => {
    var {name, id} = bouton;
    return (
        "<button type = 'button' class = 'btnFilter' onclick = 'filterFigures("+(id)+`)'>${name}</button>`
    )
}).join('');


let works = [
    {"id": 1, "title": "Abajour Tahina", "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png", "categoryId": 1, "categoryName": "Objets", "userId": 1, "categoryAllId":4},
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
const categories =[...new Set(works.map((figure) => {
    return figure} ))]

const filterFigures =(a)=> {
    const filterCategories = categories.filter(figure);
    function figure(value) {
        if(value.categoryId==a || value.allId==a) {
            return(
                value.categoryId || value.allId 
            )
        }
    }
    displayFigure(filterCategories)
}

const displayFigure = (figures) => {
    document.getElementById('projects').innerHTML= figures.map((figure) => {
        var {imageUrl, title} = figure;
        return (
            `<figure class ="figure" data-figure="" id="figure">
            <img src= "${imageUrl}"/>
            <figcaption id="figcaption">${title}</figcaption>
            </figure>`
        )
    }).join('');
}
displayFigure(categories);


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










