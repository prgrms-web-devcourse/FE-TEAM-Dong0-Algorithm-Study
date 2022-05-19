```js
// 내림 차순 정렬
// h가 해당 인덱스의 값보다 커지면 끝

function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;

  while (h < citations[h]) {
    h++;
  }

  return h;
}
```
