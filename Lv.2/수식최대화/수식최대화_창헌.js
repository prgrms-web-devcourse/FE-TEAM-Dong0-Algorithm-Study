function solution(expression) {
  let answer = [];
  let arr = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];
  let numberArr = expression.split(/[\+\-\*]/); //숫자 모음
  let calArr = expression.split(/[0-9]/).filter((e) => e.length > 0); //기호 모음

  for (let t = 0; t < arr.length; t++) {
    let temp = arr[t]; //부호 우선순위
    let number = [...numberArr]; //숫자 배열 복사
    let cal = [...calArr]; // 기호 배열 복사
    while (number.length !== 1) {
      // 결과가 하나만 남을 때까지 반복
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < cal.length; j++) {
          if (temp[i] === cal[j]) {
            //우선순위랑 같은 부호를 찾으면
            number[j] = eval(number[j] + temp[i] + number[j + 1]); // 계산하고
            number.splice(j + 1, 1); //계산된 숫자 없애기
            cal.splice(j, 1); //계산된 부호 없애기
            i--; //배열요소를 하나 지웠기 때문에 인덱스 맞추기
            j--;
            break;
          }
        }
      }
    }
    answer.push(Math.abs(number[0])); //결과의 절댓값
  }
  return Math.max(...answer);
}
