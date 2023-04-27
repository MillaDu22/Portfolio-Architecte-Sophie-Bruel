//////////////////////////////////////////// Implementation de la modale 1 (gallery) //////////////////////////////////////////////////////////////

const urlWorksModale = "http://localhost:5678/api/works";
function displayModale1() {
    fetch (urlWorksModale)
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.log("Erreur, lors de l'appel API");
        }          
    })
    .then(data => {
        data.forEach((element, index) => {
            const sectionEdit = document.querySelector('.sectionEdit');
            const sectionEditDiv = document.createElement('div');
            sectionEditDiv.className = "photoEdit";
            const deleteImg = document.createElement('span');
            deleteImg.classList ="trash"
            let deleteImgIcon = document.createElement('i')
            deleteImgIcon.className = "fa-regular fa-trash-can";
            deleteImgIcon.addEventListener('click', (e) => {
                e.preventDefault()
                deleteWorks(element.id)
            });  
            const sectionEditImg = document.createElement('img');
            sectionEditImg.classList="photo-edit";
            sectionEditImg.src= element.imageUrl;
            const txtImg = document.createElement('p');
            txtImg.className ="pGalleryEdit";
            txtImg.innerHTML ="éditer";
            if(index === 0) {
                const maximizeImg =document.createElement('span');
                maximizeImg.className="maximize";
                const maximize = document.createElement ('i');
                maximize.className="fa-solid fa-maximize";
                sectionEditDiv.appendChild(maximizeImg);
                sectionEditDiv.appendChild(maximize);
                sectionEdit.appendChild(sectionEditDiv);
            }
            
/////////////////////////////// function supprimer projet par projet de la gallery (via icon delete) //////////////////////////////////////////////////////////  

            function deleteWorks(id) {
                fetch ("http://localhost:5678/api/works/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": "Bearer " +localStorage.getItem('token'),
                    },
                })
                .then (response => {
                    if (response.ok) {
                        sectionEditDiv.style.display="none";
                    }
                    else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.error(error)
                });
            }
            sectionEdit.appendChild(sectionEditDiv);
            sectionEditDiv.appendChild(deleteImg);
            sectionEditDiv.appendChild(deleteImgIcon);
            sectionEditDiv.appendChild(sectionEditImg);
            sectionEditDiv.appendChild(txtImg);
        })
    })
}
displayModale1()

///////////////////////////////////////////////////// input File type///////////////////////////////////////////////////////////////////////////

const image = document.getElementById('view');
const previewPicture = function(e) {
    const [picture] = e.files
    const types = ["image/jpg", "image/jpeg", "image/png"]
    if (types.includes(picture.type)) { 
        document.querySelectorAll('.hiddenEl').forEach((hiddenEl) =>  {
            hiddenEl.style.display="none"
        }) 
        if  (picture) {
            var reader =new FileReader();
            reader.onload=function(e) {
                image.src = e.target.result
            }
            reader.readAsDataURL(picture)
        }
    }
};
previewPicture;

////////////////////////////////////////////////// Fetch GET creation select List categories /////////////////////////////////////////////////////

const categorie = document.getElementById('categorie');
const optionChoice = document.createElement('option');
optionChoice.innerText='';
categorie.appendChild(optionChoice);

fetch ('http://localhost:5678/api/categories', {
    method:'GET', 
    headers: {
        'Content-Type':'application/json'
    },
})
.then (response => response.json())
.then (data => {
    selectionCategorie (data, categorie);
})
.catch(error => console.error(error));

const selectionCategorie = (categories, categorie)=> {
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.innerText = category.name;
        option.value = category.id;
        categorie.appendChild(option);
    });
};

//////////////////////////////////////// Conditions d'ajout et style Bouton valider //////////////////////////////////////////////////////////////

const formAjout= document.getElementById("display_image");
const titre = document.getElementById('titre');
const btnValider = document.getElementById('validerAjout');
const picture =document.getElementById('picture');

formAjout.addEventListener("input", () => {
    if(titre.value !== '' && picture.value !== '' && categorie.value !== '') {
        btnValider.style.background="#1D6154";
        const erreurAjout = document.querySelector(".erreurAjout");
        erreurAjout.style.display="none";
    }
    else {
        btnValider.style.background="#A7A7A7";
    }
});

/////////////////////////////////////////////////////// fetch POST validation ajout ////////////////////////////////////////////////////////////

formAjout.addEventListener("submit", event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", picture.files[0]);
    formData.append("title", titre.value);
    formData.append("category", categorie.value);

    function reset() {
        document.querySelectorAll('.hiddenEl').forEach((hiddenEl) =>  {
            hiddenEl.style.display="inherit"
        }) 
        image.src=""
        document.getElementById('display_image').reset();
    }

    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
    })
    .then (response => {
        if(response.ok) {
            console.log(response);
            reset()
            alert('Le projet a bien été ajouté')
            window.location=("./index.html");
        }
        else { 
            const erreurAjout = document.querySelector(".erreurAjout");
            erreurAjout.style.display="flex";
        }
    })
});
