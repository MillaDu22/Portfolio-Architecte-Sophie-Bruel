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
            "Accept" : 'application/json',
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then ((response) => response.json())
    .then ((response ) => {
        if (response.userId === 1) {
            localStorage.setItem("admin", true);
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.userId);
            window.location = ('./index.html');
            return true;
        }
        else  {
            const errorLog = document.querySelector(".erreurLog");
            errorLog.style.display="flex";
            return false;   
        }        
    })
    .catch (error => console.error(error));
}
SeConnecter;








