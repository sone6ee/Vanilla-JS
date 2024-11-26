const loginForm = document.querySelector("#login-form");  // const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();     // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막음.
    
    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onLoginSubmit);