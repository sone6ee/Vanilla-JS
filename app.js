/*

const 와 let 차이점
- const : 상수, 값이 바뀔 수 없음.
- let : 새로운 값 대체 가능. 단, let은 처음 한 번만 선언.

보통 기본적으로 const 를 사용하고, variable을 업데이트 하고싶다면 (필요할 때만) let 사용.

var는 const와 let 이전에 나왔던 것. 단, 값을 업데이트 하더라도 알려주지 않음. (규칙이 없음)
그래서 cosnt와 let을 만듬.

+) null : 값이 주어졌지만 그 값은 비어있어요.
+) undefined : variable가 메모리에는 있는데 값이 없어요.
    ex. let A; 이런식으로 선언


11.11
function 변수명() {
    반복할 내용 ex. console.log("hellol");
}

실행하려면? 변수명() 입력

argument: 함수를 실행하는 동안 어떤 정보를 함수에 보낼 수 있는 방법

*/

function hello(nameOfPerson, age) {
    console.log(nameOfPerson + age);
}

// ex. console.log(nameOfPerson); 을 그냥 쓰면 funcion 밖에서는 nameOfPerson이
// 존재하지 않아서 오류발생

const player = {
    name: "hui",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHello("lyn");
player.sayHello("shoui");

/*

function 괄호 안의 매개변수에서 argument를 받아들일 수 있다.
ex)
function sayHello(nameOfPerson) {
console.log(nameOfPerson);
}

sayHello("nico")
sayHello("dal")
sayHello("lynn") // nameOfPerson은 "nico" "dal" "lynn" 을 받았다고 생각하면 됨.





argument는 하나만 받을 수 있는게 아니라 여러개를 받을 수 있음.
ex)
function sayHello(nameOfPerson , age) {
console.log(nameOfPerson);
}

sayHello("nico" , 12);
sayHello("dal" , 20);
sayHello("lynn" , 23); // sayHello function의 매개변수 2개는 아래 2개의 argument를 받는 중임.

function의 값은 function 안에서만 존재한다.




오브젝트 안에서 매개변수가 argument를 받는 방식
ex)
const player = {
name : function(Name) {
console.log("Your Name is " + Name + " 입니다.")
} ,
sayHello : function(Age) {
console.log("Your age is " + Age + " 입니다." )
}
}

player.sayHello(14)
player.name("james")

*/



// 계산기 만들기 #2.10 과제
const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    div: function(a, b) {
        console.log(a / b);
    },
    multip: function(a, b) {
        console.log(a * b);
    },
    powerof: function(a, b) {
        console.log(a ** b);    // 제곱근 **
    }
}


/* funcion 안에서 return과 추가작업(ex. console.log();)를 입력하면
    retrun까지만 작업수행. 즉, 추가작업 수행X
    따라서 추가작업을 실행하고 싶다면 추가작업 다음에 retrun이 와야함. */

