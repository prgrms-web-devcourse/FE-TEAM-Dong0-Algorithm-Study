```js
function solution(n) {
  let answer = 0;
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    let temp = dp[i - 1] + dp[i - 2];
    dp[i] = temp % 1000000007;
  }
  return dp[n - 1];
}
```
