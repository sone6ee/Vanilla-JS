const loginForm = document.querySelector("#login-form");  // const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";    // string을 반복해서 사용하게 될 경우 대문자 변수로 저장해 놓는 것이 오류 찾기에 좋음.



function onLoginSubmit(event) {
    event.preventDefault();     // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막음.
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);

    // localStorage : 브라우저에 무언가를 저장할 수 있게 해줌. 즉, 나중에 가져다 쓰기 가능.
    
    localStorage.getItem(USERNAME_KEY);

}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName} :)`;   //== greeting.innerText = "Hello! " + userName + " :)";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show the greetings
    paintGreetings(savedUserName);
}
