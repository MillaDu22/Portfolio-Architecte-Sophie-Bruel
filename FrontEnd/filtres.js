

//////////////////////////////////////////////////////////// Filtre////////////////////////////////////////////////////////////////////////
async function getWorksAsPromise() {
    var promise = await fetch (urlWorks).then(response => {return response.json()});

    return await promise;
}

async function renderWorks(work) {
    let works= await getWorksAsPromise();
        /*works.forEach((work)=> {
            projets.innerHTML += `<figure class ="figure" id="figure">
            <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
            <figcaption id="figcaption">${work.title}</figcaption>
            </figure>`
        })*/

        boutons = document.querySelectorAll('.btnFilter')
        function activeBtn(e) {
            boutons.forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        };

        btnTous.addEventListener('click', function(e) {
            e.preventDefault();
            const tous = works.filter (work => work.categoryId!= 0)
            console.log(tous);
            activeBtn(e);
            tous.forEach((work)=> {
                projets.innerHTML += `<figure class ="figure" id="figure">
                <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
                <figcaption id="figcaption">${work.title}</figcaption>
                </figure>`
                console.log(work);
            })
        })

        btnObjets.addEventListener('click', function(e) {
            e.preventDefault();
            const objets = works.filter (work => work.categoryId==1)
            console.log(objets);
            activeBtn(e);
            objets.forEach((work)=> {
                projets.innerHTML += `<figure class ="figure" id="figure">
                <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
                <figcaption id="figcaption">${work.title}</figcaption>
                </figure>`
                console.log(work);
            })
        })

        btnAppartements.addEventListener('click', function(e) {
        e.preventDefault();
        const appartements = works.filter (work => work.categoryId==2)
        console.log(appartements);
        activeBtn(e);
        appartements.forEach((work)=> {
            projets.innerHTML += `<figure class ="figure" id="figure">
            <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
            <figcaption id="figcaption">${work.title}</figcaption>
            </figure>`
            console.log(work);
        })
    })
    
    btnRestaurants.addEventListener('click', function(e) {
        e.preventDefault();
        const restaurants = works.filter (work => work.categoryId==3)
        console.log(restaurants);
        activeBtn(e);
        restaurants.forEach((work)=> {
            projets.innerHTML += `<figure class ="figure" id="figure">
            <img src= "${work.imageUrl}" alt="${work.altTxt}"/>
            <figcaption id="figcaption">${work.title}</figcaption>
            </figure>`
            console.log(work);
        })
    })
}
renderWorks();











