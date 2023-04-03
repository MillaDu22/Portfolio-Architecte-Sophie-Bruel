
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
            deleteImg.classList ="trash"
            let deleteImgIcon = document.createElement('i')
            deleteImgIcon.className = "fa-regular fa-trash-can";
            deleteImgIcon.addEventListener('click', () => {
                deleteWorks (element.id)
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
            }

///////////////////////////////function supprimer projet par projet de la gallery (via icon delete) ////////////////////////////////////////////////////////// 
                
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
                        sectionEditDiv.style.dysplay="none";
                    }
                    else {
                        console.log("Impossible de supprimer le projet")
                    }
                })
                .catch(error => {
                    console.error(error)
                });
            };
            sectionEdit.appendChild(sectionEditDiv);
            sectionEditDiv.appendChild(deleteImg);
            sectionEditDiv.appendChild(deleteImgIcon);
            sectionEditDiv.appendChild(sectionEditImg);
            sectionEditDiv.appendChild(txtImg);
        })
    })
}
displayModale1();

///////////////////////////////////////////////////// input File type et size/////////////////////////////////////////////////////////////////////////////////
const image = document.getElementById('view');
const previewPicture = function(e) {
    const [picture] = e.files
    const types = ["image/jpg", "image/jpeg", "image/png"]
    if (types.includes(picture.type)) {              
    }
    if(image) {
        const taille = image.size;
        const max = 4000000;
        if (taille > max) {
            alert ("Trop lourd! jpg, png < 4mo max");
            return;
        }
    }
    if  (picture) {
        var reader =new FileReader();
        reader.onload=function(e) {
            image.src = e.target.result
        }
        reader.readAsDataURL(picture)
    };
};

////////////////////////////////////////////////// Fetch GET creation select List categories /////////////////////////////////////////////////////
const categorie = document.getElementById('categorie');
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
        console.log(option);
        categorie.appendChild(option);
    });
};

//////////////////////////////////////// Conditions d'ajout et style Bouton valider active ////////////////////////////////////////////////////////////////////////
const formAjout= document.getElementById("display_image");
const txtImg = document.getElementById('titre');
const btnValider = document.getElementById('validerAjout');
const inputFile =document.getElementById('image_input');

formAjout.addEventListener("input", () => {
    if(txtImg.value !== '' && image.value !== '' && categorie.value !== '') {
        btnValider.style.background="#A7A7A7";
    }
    else {
        btnValider.style.background="#1D6154";
    };
});

/////////////////////////////////////////////////////// fetch POST validation ajout ////////////////////////////////////////////////////////////
btnValider.addEventListener("click", (event) => {
    event.preventDefault();
    let formData = new formData();
    formData.append("image", image);
    console.log(image);
    formData.append("title", txtImg);
    console.log(txtImg);
    formData.append("category", categorie);

    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": "Bearer" + localStorage.getItem("token"),
        },
    })
    .then (response => response.json())
    .then (data => {
        console.log ('Le projet a bien été ajouté', data);
    })
    .catch (error => {
        console.error("Une erreur s'est produite, veuillez réenvoyer", error );
    });
});

