localStorage.setItem("admin", false);
const formLog = document.getElementById("formLog");

function validerConnexion (formLog) {
    formLog.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById('username').value;
        const password= document.getElementById('password').value;
        const urlAuth = "http://localhost:5678/api/users/login";
        fetch(urlAuth, {
            method: "POST",
            body: JSON.stringify({ email, password }), 
            headers : {
                "Content-Type": "application/json",
            },
        })
        .then ((response) => response.json())
        .then ((data ) => {
            if (data.userId === 1) {
                localStorage.setItem("admin", true);
                localStorage.setItem('token', data.token);
                window.location = ("./index.html");
                return true;
            }
            else {
                (alert("Erreur dans l'identifiant ou le mot de passe."));
                return false;
            }
        })
        .catch ((error) => console.error(error))
    });
}





