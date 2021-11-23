// 변수

const name = "Mike";
const age = 30;

// 변할 수 있는 값은 let으로 선언
// const는 절대로 바뀌지 않는 상수 -> 수정 x -> 대문자로 작성하는게 원칙
// 보통 모든 변수를 const로 선언하고, 변할 가능성이 있는 변수를 let으로 바꿔서 하는 게 보통이다.

// 자료형
const name1 = "Mike";
const name2 = "Mike";
const name3 = "Mike";

const message = "I'm a boy.";
const message2 = "I\'m a boy.";

const message3 = 'my name is ${name}'; // Mike
console.log(message3);

const message4 =  '나는 ${31+1}입니다.';
console.log(message4)

// 숫자형
const age1 = 30; // 숫자형 number
const PI = 3.14;

console.log(1+2); // 더하기
console.log(10-3); // 빼기
console.log(3*2); // * 곱하기
console.log(6/3) // / 나누기
console.log(6%4) // 나머지

// NaN = Not a Number

// 논리연산자
const a = true;
const b = false;

const name4 = "Mike";
const age2 = 30;

console.log(name4=='Mike');
console.log(age2 > 40);

// null과 undefined
let sddca;
console.log(sddca);

let asd = null; // asd는 존재하지 않는다.

// typeof 연산자 -> 선언된 변수의 자료형을 알아낼 수 있다.

const name1313 = "Mike";

const a1 = "나는 ";
const b1 = " 입니다.";

console.log(a1+name1313+b1); // 문자형 더하기 가능