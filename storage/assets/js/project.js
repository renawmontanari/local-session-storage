
'use strict'

const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

function checkUser() {
    const userName = localStorage.getItem("name");

    if (userName) {
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block";

        const userNameElement = document.querySelector("#username");
    
        userNameElement.textContent = userName;

    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";
    }
}

nameForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nameInput = document.querySelector("#name");

    localStorage.setItem("name", nameInput.value);

    nameInput.value = "";

    checkUser();
});

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("name");

    checkUser();
});

// Application start
checkUser();