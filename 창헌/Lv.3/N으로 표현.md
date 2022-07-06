```js
function solution(N, number) {
  let answer = 0;
  let dp = Array.from(new Array(9), () => new Set());
  if (N == number) return 1;
  else {
    dp.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });

    for (let i = 1; i <= 8; ++i) {
      for (let j = 1; j < i; ++j) {
        for (let first of dp[j]) {
          for (let second of dp[i - j]) {
            dp[i].add(first + second);
            dp[i].add(first - second);
            dp[i].add(first * second);
            dp[i].add(first / second);
          }
        }
      }
      if (dp[i].has(number)) return i;
    }
    return -1;
  }
  return answer;
}
```

## 풀이

처음에는 dp배열에 1을 만드는데 필요한 최소의 경우의 수 ... i를 만드는데 필요한 최소의 경우의 수를 넣으려 했다.  
dp[2]=dp[1]+1만드는 방법(N/N)  
=>dp[2]=dp[1]+2  
=>...
하지만 고려해야하는 경우의 수가 너무 많았고, 애초에 문제에서 상한선을 정해주었기 때문에 올바르지 않은 풀이라고 생각했다.

결국 풀이를 참조해서 풀었습니다.

제가 생각했던 것과 반대로 dp라는 배열에 N을 i만큼 사용해서 만들 수 있는 모든 값을 넣습니다.

Set을 만들어서 기본적으로 N을 i번 사용해서 만들 수 있는 수를 넣습니다. ex) N=5,dp[1]={5} dp[2]={55} ...

최대 8번까지 가능하고, 이상 넘어가면 -1을 리턴해주고, for문을 돌며 사칙연산을 해서 나올 수 있는 값을 dp에 넣어줍니다.

이때 찾는 값이 있다면 해당 i를 리턴해줍니다.
