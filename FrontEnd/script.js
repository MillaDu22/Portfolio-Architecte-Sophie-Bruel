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

///////////////////////////////////////////// Filtrage fusion tableaux categories et works /////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////// Tableau 1 categories /////////////////////////////////////////////////////////////////
const boutons = [{allId: "Tous", name: 'Tous'}, {id: 1, name:'Objets'}, {id:2, name: 'Appartements'}, {id: 3, name: 'Hotels & restaurants'} ];

//////////////////////////////////////////////////////Function filtrage///////////////////////////////////////////////////////////////////////////
const filters = [...new Set ( boutons.map (( bouton ) => {
    return bouton
    }
))]

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
    {"id": 11, "title": "Hotel First Arte - New Delhi", "imageUrl": "http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png", "categoryId": 3, "categoryName":"Hotels & restaurants", "userId": 1}
] ;

////////////////////////////////////////////////////////// Affichage des projets au filtrage /////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////// Implementation de la modale 1 (gallery) /////////////////////////////////////////////////////////////////////////////////////////
function displayModale1() {
    fetch (urlWorks)
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new error ("erreur");
        }          
    })
    .then(data => {
        data.forEach((element, index) => {
            const sectionEdit = document.querySelector('.sectionEdit');
            const sectionEditDiv = document.createElement('div');
            sectionEditDiv.className = "photoEdit";
            const deleteImg = document.createElement('span');
            deleteImg.classList="trash"
            const deleteImgIcon = document.createElement('i')
            deleteImgIcon.className= "fa-regular fa-trash-can";
            const sectionEditImg = document.createElement('img')
            sectionEditImg.classList="photo-edit";
            sectionEditImg.src= element.imageUrl;
            const txtImg = document.createElement('p')
            txtImg.className="pGalleryEdit";
            txtImg.innerHTML ="éditer";
            if(index === 0) {
                const maximizeImg =document.createElement('span');
                maximizeImg.className="maximize";
                const maximize = document.createElement ('i');
                maximize.className="fa-solid fa-maximize";
                sectionEditDiv.appendChild(maximizeImg);
                sectionEditDiv.appendChild(maximize);
            }

///////////////////////////////function supprimer projet par projet de la gallery (via icon delete) //////////////////////////////////////////////////////////           
            function deleteWorks() {
                fetch ("http://localhost:5678/api/works", {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": "Bearer"+localStorage.getItem('token'),
                    },
                })
                .then (response => {
                    if (response.ok) {
                        sectionEditDiv.remove();
                    }
                    else {
                        console.log("Suppression non effectuée")
                    }
                })
                .catch(error => {
                    console.error(error)
                });
            };
            deleteWorks();

/////////////////////////////////////////////function supprimer tous les projets de la gallery par boutons//////////////////////////////////////////////////////////   
            function clearGallery() {
                fetch ("http://localhost:5678/api/works", {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": "Bearer"+localStorage.getItem('token'),
                    },
                })
                .then (response => {
                    if (response.ok) {
                        sectionEditDiv.remove();
                    }
                    else {
                        console.log("Suppressions non effectuées")
                    }
                })
                .catch(error => {
                    console.error(error)
                });
            };
            clearGallery()
            sectionEdit.appendChild(sectionEditDiv);
            sectionEditDiv.appendChild(deleteImg);
            sectionEditDiv.appendChild(deleteImgIcon)
            sectionEditDiv.appendChild(sectionEditImg);
            sectionEditDiv.appendChild(txtImg);
        })
    })
}
displayModale1()

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

////////////////////////////////////////////////////////// Affichage page apres connexion ///////////////////////////////////////////////////////////////

function displayPageConnected(){
    let logoutUser = document.querySelector('.aLogin');
    logoutUser.innerHTML= ""
    logoutUser.innerText="logout"
    const displayEditMod = document.querySelector('.editMod');
    displayEditMod.style.visibility='visible';
    /*const dispearFilters =document.querySelector('.filterBtns');
    dispearFilters.style.display='none';*/
};
displayPageConnected()

///////////////////////////////////////////////////////// Login connexion ///////////////////////////////////////////////////////////////////////
const email = 'sophie.bluel@test.tld';
const password = 'S0phie';
function SeConnecter() {
    const email = document.getElementById('username');
    const password= document.getElementById('password');
    let user = {
        email: email.value,
        password: password.value
    };
    const urlAuth = "http://localhost:5678/api/users/login";
    fetch(urlAuth, {
        method: "POST",
        headers : {
            "Accept" :'application/json',
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user) 
    })
    .then((response) => response.json())
    .then ((response)=> {
        if (response.userId === 1) {
            sessionStorage.setItem('token', response.token)
            sessionStorage.setItem('userId', response.userId)
            window.location=('./index.html')
            return true;
        }
        else (alert("Erreur dans l'identifiant ou le mot de passe."));
        displayPageConnected()
        return false;
    })
    .catch(error => console.error(error));
};
SeConnecter();
openModale();
openNextWindow();

////////////////////////////////////////////////////////////////// Deconnexion //////////////////////////////////////////////////////////////////////
function diplayPageDisconnected() {
    window.location=('./index.html');
    let logoutUser = document.querySelector('.aLogin');
    logoutUser.innerHTML= ""
    logoutUser.innerText="login"
    const displayEditMod = document.querySelector('.editMod');
    displayEditMod.style.visibility='hidden';
    const dispearFilters =document.querySelector('.filterBtns');
    dispearFilters.style.display='block';
};
function SeDeconnecter() {
    window.location=('./index.html');
}
SeDeconnecter();
diplayPageDisconnected()

//???????????????????????       Repasser par fetch?             ????????????/////////////////

////////////////////////////////////////////////////////////// Modale Gallery ////////////////////////////////////////////////////////////////////////


function closeGalleryEdition(){
    galleryEdit.style.visibility="hidden";
};
closeGalleryEdition();
function deleteWorks() {
}
closeGalleryEdition();

////////////////////////////////////////////////////// Modale d'ajout Uploader ////////////////////////////////////////////////////////////////////
function retourModaleGallery() {
    next.style.visibility="hidden";
    galleryEdit.style.visibility="visible";
};
retourModaleGallery();

function closeModaleAjout() {
    next.style.visibility="hidden";
    galleryEdit.style.visibility="hidden";
}
closeModaleAjout();


const image_input = document.querySelector("#image_input");
var uploaded_image ="";
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").getElementsByClassName.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[O]);
});


function ajoutValidate() {
    
}
ajoutValidate();










