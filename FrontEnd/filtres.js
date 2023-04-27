const projets = document.getElementById('projects');
const urlWorks = "http://localhost:5678/api/works";

//////////////////////////////////////////////////////////// Filtres ////////////////////////////////////////////////////////////////////////
async function getWorksAsPromise() {
    var promise = await fetch (urlWorks)
    .then(response => {return response.json()
    });
    return await promise;
}
///////////////////////////////////////////////////////// Affichage des travaux ///////////////////////////////////////////////////////////
async function renderWorks() {
    let works= await getWorksAsPromise();
    function displayWorks(works) {
        works.forEach((work)=> {
            const figure = document.createElement('figure');
            figure.className="figure";
            projets.appendChild(figure);
            const imgWork = document.createElement('img');
            imgWork.src = work.imageUrl ;
            figure.appendChild(imgWork);
            const figcaption = document.createElement('figcaption');
            figcaption.classname= "figcaption";
            figcaption.innerHTML= work.title;
            figure.appendChild(figcaption);
        })
    }
    displayWorks(works);

 ///////////////////////////////////////////////////// Suppression affichage travaux au filtrage /////////////////////////////////////////
    function removeWorks() {
    projets.innerHTML =''
    }

////////////////////////////////////////////////// creation boutons filtrage /////////////////////////////////////////////////////////////////
    const btns = document.getElementById('btnFilters');
    const btnTous = document.createElement('button');
    btnTous.className ="btnFilter tous active";
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

/////////////////////////////////////////////////////// function bouton active ///////////////////////////////////////////////////////////////

    const boutons = document.querySelectorAll('.btnFilter')
    function activeBtn(e) {
        boutons.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
    }

/////////////////////////////////////// gestion des boutons filtrage tous, objets, appartements, hotels & restaurants ////////////////////////
    btnTous.addEventListener('click',function(e) {
        removeWorks(works);
        e.preventDefault();
        let tous = works.filter (work => work.categoryId != 0)
        activeBtn(e);
        displayWorks(tous);
    });
    
    btnObjets.addEventListener('click', function(e) {
        e.preventDefault();
        removeWorks(works);
        let objets = works.filter (work => work.categoryId==1)
        activeBtn(e);
        displayWorks(objets);
    })

    btnAppartements.addEventListener('click', function(e) {
        e.preventDefault();
        removeWorks(works);
        let appartements = works.filter (work => work.categoryId==2)
        activeBtn(e);
        displayWorks(appartements);
    })
    
    btnRestaurants.addEventListener('click', function(e) {
        e.preventDefault();
        removeWorks(works);
        let restaurants = works.filter (work => work.categoryId==3)
        activeBtn(e);
        displayWorks(restaurants);
    })
}
renderWorks();












