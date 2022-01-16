////// HÄMTA /////////////////////////////////
const userNameInput = document.getElementById("usernameinput");
const loggInBtn = document.getElementById("logginbtn");
const section = document.getElementById("section")
const nav = document.getElementById("nav")
const loggOut = document.createElement("button");

///// Användare /////////////////////////////////////

let users = [
    {
        username: "anton",
    }
];
localStorage.setItem("users", JSON.stringify(users))

/////////Logga in knappen, rätt eller felanvändare////////////////////////////////////////////

loggInBtn.addEventListener("click", () => {
    let userInput = userNameInput.value
    for (let i = 0; i < users.length; i++) {
        if (userInput == users[i].username){
            loggIN()
        }
        else {
            let wrongUser = document.createElement("div")
            wrongUser.innerText = "Fel kod,  försök igen";
            document.body.append(wrongUser);
        }
    }
})

//logga ut 
loggOut.addEventListener("click", () => {
    localStorage.removeItem("stay");
    localStorage.removeItem("users");
    location.reload();
});

///////////Logga in sidan///////////////////////////////////////

function loggIN() {
    nav.innerHTML = `Lös pusslet ` 
    loggOut.textContent = "logga ut";
    nav.append(loggOut);
    section.innerHTML = 
    "<div id='one'><img src='img/pussel.jpg'></div>"
    localStorage.setItem("stay", 1)
}

///////////Kolla om man är inloggad///////////////////////////////////////
function check() {
    if (localStorage.getItem("stay") == 1) {
        loggIN()
    };
}
window.onload = check();

