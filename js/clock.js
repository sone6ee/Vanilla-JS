const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");     // padStart 와 padEnd는 String에 쓸 수 있다. 주의!
    const minutes = String(date.getMinutes()).padStart(2, "0"); // padStart(max길이, 앞에 채울 거); padEnd(max길이, 뒤에 채울 거);
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // console.log(`${hours}:${minutes}:${seconds}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// interval : 매번 일어나야 하는 무언가 ex. 2초마다 일어나게 하는 것
// setInterval(sayHello, 5000);    // setInterval : (함수, 실행 시간) 5000 == 5초

// setTimeout 은 setInterval와 비슷함! but, 동작은 다름. 얼마나 기다리게 할 건지를 적음.
// setTimeout(sayHello, 5000);     // 즉, 5초 뒤에 시작함!

getClock();
setInterval(getClock, 1000);