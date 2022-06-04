function solution(rows, columns, queries) {
  let index = 1;

  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(columns).fill().map((v) => index++); //2차원 배열 생성
  }
  return queries.map((query) => rotate(arr, ...query));
}
function rotate(arr, x1, y1, x2, y2) {
  x1--; //인덱스 맞추기
  y1--;
  x2--;
  y2--;
  let temp = []; //움직인 칸 중에서 최소 값을 찾기 위한 배열
  let start = arr[x1][y1];
  for (let i = y2; i > y1; i--) {
    //상
    arr[x1][i] = arr[x1][i - 1];
    temp.push(arr[x1][i - 1]); //움직인 값들을 넣기
  }
  for (let i = y1; i < y2; i++) {
    //하
    arr[x2][i] = arr[x2][i + 1];
    temp.push(arr[x2][i + 1]);
  }
  for (let i = x1; i < x2; i++) {
    //좌
    arr[i][y1] = arr[i + 1][y1];
    temp.push(arr[i + 1][y1]);
  }

  for (let i = x2; i > x1; i--) {
    //우
    arr[i][y2] = arr[i - 1][y2];
    temp.push(arr[i - 1][y2]);
  }

  arr[x1][y1 + 1] = start; //시작점 옮기기
  temp.push(start);
  return Math.min(...temp); //움직인 값들 중 최소값 넣기
}
