// 비교연산자, 조건문
// 비교연산자
// a=3 -> =은 할당을 의미함
// a==3 -> a는 3과 같다.
console.log(10>5);
console.log(10==5); // 동등 연산자
console.log(10!=5);

const a =1;
const b= "1";
console.log(a === b); // =을 3개쓰면 type까지 비교함 -> 일치연산자

// 조건문
// if, else, else if
// 19살이면 수능 잘치세요라는 문구를 보여주세요.
const age=19;
if(age>19){
    console.log("환영합니다.");
} else if (age==19){
    console.log("수능 잘치세요.")
}
else {
    console.log("안녕히 가세요")
}
console.log("------------------------")

// 논리연산자
// || -> OR
// && -> AND
// ! -> NOT

// OR
// 이름이 TOM이거나, 성인이면 통과
const name1 = "Mike";
const age2 = 10;
if(name1=='TOM' || age2 >20){
    console.log("통과");
} else {
    console.log("갹갹이");
}

//AND
// 이름이 Mike이고, 성인이면 통과
if(name1=='Mike' && age2 >20){
    console.log("통과");
} else {
    console.log("갹갹이");
}

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고..
// const age3 = prompt('나이가..?');
// const isAdult = age>19;

// if(!isAdult){
//   console.log("돌아가")
// }


// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = `female`;
const name4 = `july`;
const isAdult = true;

// if(gender === 'male' && name4 ==='Mike' || isAdult){
if(gender === 'male' && (name4 ==='Mike'|| isAdult)){
    console.log("통과");
} else{
    console.log("돌아가");
}