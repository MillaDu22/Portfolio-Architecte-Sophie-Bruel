
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
            })   
            const sectionEditImg = document.createElement('img')
            sectionEditImg.classList="photo-edit";
            sectionEditImg.src= element.imageUrl;
            const txtImg = document.createElement('p')
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
                        sectionEditDiv.style.dysplay="none"
                    }
                    else {
                        console.log("Impossible de supprimer le projet")
                    }
                })
                .catch(error => {
                    console.error(error)
                });
                }
                
/////////////////////////////////////////////function supprimer tous les projets de la gallery par boutons//////////////////////////////////////////////////////////  
                function clearGallery(id) {
                fetch ("http://localhost:5678/api/works/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": "Bearer " + localStorage.getItem('token'),
                    },
                })
                .then (response => {
                    if (response.ok) {
                        sectionEditDiv.style.display="none";
                    }
                    else {
                        console.log("Impossible de supprimer les projets")
                    }
                })
                .catch(error => {
                    console.error(error)
                });
            };
            sectionEdit.appendChild(sectionEditDiv);
            sectionEditDiv.appendChild(deleteImg);
            sectionEditDiv.appendChild(deleteImgIcon)
            sectionEditDiv.appendChild(sectionEditImg);
            sectionEditDiv.appendChild(txtImg);
        })
    })
}
displayModale1()





///////////////////////////////////////////////////// input File /////////////////////////////////////////////////////////////////////////////////

const btnAjouterPhoto = document.querySelector("#image_input");
btnAjouterPhoto.addEventListener("change", function() {
    const photo = this.photos[0]
    if(photo) {
        const taille = photo.size;
        const max = 4 * 1024 * 1024;
        if (taille > max) {
            alert ("Trop lourd! jpg, png <= 4mo max");
            return;
        }
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            view.setAttribute("src", reader.result);
            const landscape = document.querySelector(".fa-solid fa-image");
            landscape.style.display="none";
            const labelAjout = document.querySelector(".ajoutAjout");
            labelAjout.style.display="none";
            const pImgSize = document.querySelector(".pajout");
            pImgSize.style.display="none";
            const view =
            view.style.display="block";
        });
        reader.readAsDataURL(photo);
    }
    else {
        view.setAttribute ("src", "")
    }
});
const formAjout= document.querySelector(".sectionAjout")
formAjout.addEventListener("input", () => {
    if(txtImg.value !== '' && uploaded_image.value !== '' && category.value !== '') {
        btnValiderAjout.style.background="#1D6154"
    }
    else {
        btnValiderAjout.style.background="#cbc9c977"
    }
})
const btnValiderAjout = document.querySelector(".submitAjout");
btnValiderAjout.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataForm = new dataForm()
    dataForm.append("image", uploaded_image.photos[0])
    dataForm.append("title", txtImg.value)
    dataForm.append("category",category.value )
    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: dataForm,
        headers: {
            "Authorization": "Bearer" + sessionStorage.getItem("token"),
        },
    })
    .then(response=> {
        if(response.ok) {
            return response.json()
        }
        else {
            throw new Error("erreur");
        }
    })
})