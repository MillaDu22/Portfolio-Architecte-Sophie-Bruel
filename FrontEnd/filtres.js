///////////////////////////////////////////// Filtrage fusion tableaux categories et works /////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////// Tableau 1 categories /////////////////////////////////////////////////////////////////
const boutons = [{allId: "Tous", name: 'Tous'}, {id: 1, name:'Objets'}, {id:2, name: 'Appartements'}, {id: 3, name: 'Hotels & restaurants'} ];

//////////////////////////////////////////////////////Function filtrage///////////////////////////////////////////////////////////////////////////
const filters = [...new Set ( boutons.map (( bouton ) => {
    return bouton
    }
))];


document.getElementById('btnFilters').innerHTML=filters.map((bouton) => {
    var {name, id} = bouton;
    return (
        "<button type = 'button' class = 'btnFilter' onclick ='filterFigures("+(id)+`)'>${name}</button>`
    )
}).join('');

/////////////////////////////////////////////////////////////////////// Tableau 2 works /////////////////////////////////////////////////////////////////

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
    {"id": 11, "title": "Hotel First Arte - New Delhi", "imageUrl": "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png", "categoryId": 3, "categoryName":"Hotels & restaurants", "userId": 1},
    {"id": 12, "title": "Malt & Juniper - New York", "imageUrl": "./assets/images/Malt & Juniper-New York.png", "categoryId": 3, "categoryName": "Hotels & restaurants", "userId": 1 }
] ;

////////////////////////////////////////////////////////// Affichage des projets au filtrage /////////////////////////////////////////////////////////////////
const categories =[...new Set(works.map((figure) => {
    return figure} ))];
const filterFigures =(a)=> {
    const filterCategories = categories.filter(figure);
    function figure(value) {
        if(value.categoryId==a || value.allId==a) {
            return (
                value.categoryId || value.allId 
            );
        };
    };
    displayFigure(filterCategories);
};

const displayFigure = (figures) => {
    document.getElementById('projects').innerHTML= figures.map((figure) => {
        var {imageUrl, title} = figure;
        return (
            `<figure class ="figure" data-figure="" id="figure">
            <img src= "${imageUrl}"/>
            <figcaption id="figcaption">${title}</figcaption>
            </figure>`
        );
    }).join('');
};
displayFigure(categories);
