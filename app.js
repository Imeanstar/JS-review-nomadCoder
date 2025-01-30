const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");


function onLoginSubmit(event){
    console.log(1);
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick);