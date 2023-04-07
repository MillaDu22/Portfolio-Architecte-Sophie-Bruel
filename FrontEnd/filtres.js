

//////////////////////////////////////////////////////////// Filtre////////////////////////////////////////////////////////////////////////
async function getWorksAsPromise() {
    var promise = await fetch (urlWorks).then(response => {return response.json()});

    return await promise;
}

async function renderWorks() {
    let works = await getWorksAsPromise();
    works.forEach(work => {
        projets.innerHTML += `<figure class ="figure" id="figure">
        <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
        <figcaption id="figcaption">${work.title}</figcaption>
        </figure>`
        console.log(work);
    })
    boutons = document.querySelectorAll('.btnFilter')
    function activeBtn(e) {
        boutons.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active')
    };

    btnTous.addEventListener('click', function(e) {
        e.preventDefault();
        let tous = works.filter(function(works) {
            if (works.categoryId != '1, 2, 3') {
                return true;
            }
        })
        console.log(tous)
        activeBtn(e)
    })

    btnObjets.addEventListener('click', function(e) {
        e.preventDefault();
        let objets = works.filter(function(works) {
            if (works.categoryId == '1') {
                return true;
            }
        })
        console.log(objets);
        activeBtn(e)
    })

    btnAppartements.addEventListener('click', function(e) {
        e.preventDefault();
        let appartements = works.filter(function(works) {
            if (works.categoryId == '2') {
            return true
            }
        })
        console.log(appartements);
        activeBtn(e)
    })
    
    btnRestaurants.addEventListener('click', function(e) {
        e.preventDefault();
        let restaurants = works.filter(function(works) {
            if (works.categoryId == '3') {
                return true
            }
        })
        console.log(restaurants);
        activeBtn(e);
    })
}
renderWorks();











