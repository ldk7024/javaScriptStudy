// 반복문
// for문
for (let i = 0 ; i<=10 ; i++){
    console.log(i); // 반복할 코드
}

// while 문
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// do while 문
// 적어도 한번은 실행

// break, continue
// break: 멈추고 빠져나옴
// continue: 멈추고 다음 반복으로 진행

// break
while(true){
  let answer = confirm("계속할까요?");
  if(!answer){
    break;
  }
}

// continue
// 짝수만 반복
for(let i = 0; i<=10 ; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}
