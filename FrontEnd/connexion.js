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
            localStorage.setItem('token', response.token)
            localStorage.setItem('userId', response.userId)
            window.location=('./index.html')
            return true;
        }
        else (alert("Erreur dans l'identifiant ou le mot de passe."));
        displayPageConnected()
        return false;
    })
    .catch(error => console.error(error));
};


let logoutUser = document.querySelector('.aLogin');
    logoutUser.addEventListener('click', function() {
    logoutUser.innerHTML= ""
    logoutUser.innerText="login"
    const displayEditMod = document.querySelector('.editMod');
    displayEditMod.style.visibility='hidden';
    const dispearFilters =document.querySelector('.filterBtns');
    dispearFilters.style.display='flex'; 
    localStorage.clear()
})

