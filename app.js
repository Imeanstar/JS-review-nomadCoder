const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event){
    console.log(1);
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);