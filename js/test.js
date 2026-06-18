console.log("Hello World");

// 자바스크립트에서 주석문은 // 로 시작합니다.

// 데이터 동적타입 -> 변수에 데이터를 할당하면 자동으로 타입이 결정된다. var, let, const 키워드를 사용하여 변수를 선언합니다.

//var : 변수를 선언할 때 사용하는 키워드. 재선언, 재할당 가능.
var a = "John";    // 문자열 데이터를 선언한것임.
var a = 134;       // 숫자 데이터로 재선언한것임.
console.log(a);
a = true;             // 불리언 데이터를 선언한것임. 소문자로 적으면 됌.
var b;                // 선언만 한 변수는 undefined 값을 가진다.
b = "bye";            // 앞서 선언은 했기 때문에 값을 할당할 수 있음.
console.log(b);

//let : 변수를 선언할 때 사용하는 키워드. 재선언 불가능, 재할당 가능.
let age = 20;         // 숫자 데이터를 선언한것임.
age = 21;             // 숫자 데이터를 재할당한것임.
// var age = 22;         // 숫자 데이터를 var로 재선언하면 에러가 발생함
console.log(age);     // 21 출력
// let age = 20;      // 이미 위에서 선언했기 때문에 에러가 발생함.


//const : 반드시 초기값 설정 필요.(이후 값변경을 미리 방지 목적.) 재선언, 재할당 불가능.
const server = "localhost:3000";      // 문자열 데이터를 선언한것임.
// server = "localhost:3001";        // 문자열 데이터를 재할당한것임. -> 에러가 발생함. 이미 위에서 선언함.

// ------------------------------------------------------------------------------------------------ //

//여러개 받는 타입 : 배열, 오브젝트

//배열 : 여러개 데이터를 순서대로 저장하는 타입.
let fruits = ["apple", "banana", "cherry"];   // 나중에 배열 변수 자체를 다른 배열로 바꿔야 할 때 let 사용
var apple = fruits[0];
console.log(apple);

// ------------------------------------------------------------------------------------------------ //
//오브젝트 : 여러개 데이터를 키와 값의 쌍으로 저장하는 타입. / 키값이 문자면 '' 생략 가능
let user = {
    'name': "John", 
    age: 20,
    city: "Seoul"};

// 자바스크립트는 카멜 방식을 주로 사용함.
var myName = user['name'];
var myCity = user.city;   // 키값이 문자일때만 가능.
console.log(myName);
console.log(myCity);

// ------------------------------------------------------------------------------------------------ //
//함수
function add(num1, num2) {           // 함수 자체에 이름이 붙음
    var result = num1 + num2;
    return result;
}



const add1 = (num1, num2) => {       // 변수(add1)에 함수가 담김
    var result = num1 + num2;
    return result;
}

var sum = add(25, 11);
console.log(sum);
// ------------------------------------------------------------------------------------------------ //
// 조건문
var score = 100;

if (score == 100) {
    console.log("100점입니다.");
} else if (score == 80) {
    console.log("90점입니다");
} else {
    console.log("100점이 아닙니다.");
}
// -------------------------------------------------------------------------------------------------//
// 반복문
for(let i = 0; i < 10; i++){
    console.log(i);
}
// ------------------------------------------------------------------------------------------------ //
// 과일이름이랑 가격을 저장하는 배열 ; 오브젝트 여러개가 저장되어 있음.
var items = [
    {name: "apple", price: 1000},
    {name: "banana", price: 2000},
    {name: "cherry", price: 3000},
    {name: "orange", price: 4000},
]

for (let i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item.name+'의 가격은 '+item.price+'원입니다.');
}

for (let item of items){
    console.log(item.name+'의 가격은 '+item.price+'원입니다.');
}


//클래스 
class Animal{
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //메서드  function 생략 가능
    eat(){
        console.log(this.name+'가 먹고 있습니다.');
    }
    
}

const dog = new Animal('멍멍이', 3);  // dog이라는 변수에 Animal 클래스를 생성하고 멍멍이와 3을 인자로 전달함.
dog.eat();