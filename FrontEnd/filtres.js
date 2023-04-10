

//////////////////////////////////////////////////////////// Filtre////////////////////////////////////////////////////////////////////////
async function getWorksAsPromise() {
    var promise = await fetch (urlWorks).then(response => {return response.json()});

    return await promise;
}

async function renderWorks(work) {
    let works= await getWorksAsPromise();
    function displayWorks(works) {
        works.forEach((work)=> {
            projets.innerHTML += `<figure class ="figure" id="figure">
            <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
            <figcaption id="figcaption">${work.title}</figcaption>
            </figure>`
        })
    }
    displayWorks(works);

    boutons = document.querySelectorAll('.btnFilter')
    function activeBtn(e) {
        boutons.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
    };

    btnTous.addEventListener('click',function(e) {
        e.preventDefault();
        let tous = works.filter (work => work.categoryId!= 0)
        console.log(tous);
        activeBtn(e);
        displayWorks(tous) 
    });
    

    btnObjets.addEventListener('click', function(e) {
        e.preventDefault();
        let objets = works.filter (work => work.categoryId==1)
        console.log(objets);
        activeBtn(e);
        displayWorks(objets) 
    })


    btnAppartements.addEventListener('click', function(e) {
        e.preventDefault();
        let appartements = works.filter (work => work.categoryId==2)
        console.log(appartements);
        activeBtn(e);
        displayWorks(appartements);
    })
    
    btnRestaurants.addEventListener('click', function(e) {
        e.preventDefault();
        let restaurants = works.filter (work => work.categoryId==3)
        console.log(restaurants);
        activeBtn(e);
        displayWorks(restaurants);
    })
}
renderWorks();












