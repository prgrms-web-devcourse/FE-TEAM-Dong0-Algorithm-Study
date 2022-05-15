function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");
  if (answer === "") {
    answer += "a";
  }
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }
  answer = answer.replace(/\.$/, "");
  while (answer.length <= 2) {
    answer += answer.charAt(answer.length - 1);
  }

  return answer;
}
