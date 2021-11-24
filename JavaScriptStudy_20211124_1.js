// 형 변환

// String() -> 문자형으로 변환
// Number() -> 숫자형으로 변환
// Boolean() -> 불린형으로 변환

// const mathScore = prompt("수학 몇점?"); // prompt로 입력받은 값은 무조건 문자형
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2 ; // 자동 형 변환
// console.log(result);

console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined),
)  // 명시적 형변환
// console.log는 쉼표로 구분을 해서 여러가지의 값을 한번에 찍을 수 있음
console.log(
    Number("3"),
    Number(true),
    Number(false) // true랑 false는 1과0으로 숫자변환됨
)

// Boolean() 형 변환
// 숫자 0, 빈 문자열, null, undefined, NaN은 false 반환 빼고는 전부 true로 반환됨

// Number(null)은 0이됨
// Number(undefined)는 NaN이됨

// 연산자 줄여서 쓰기

let num = 10;
// num = num + 5;
num+=5;

console.log(num);

// 증가 연산자, 감소 연산자
let num1 = 10;
let result = ++num1; // 앞에 넣어야 함 -> 뒤에 넣으면 증가시키기전에 값이 result에 들어감

console.log(result);