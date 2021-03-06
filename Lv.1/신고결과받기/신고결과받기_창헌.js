function solution(id_list, report, k) {
  let answer = Array(id_list.length).fill(0);
  let map = new Map();
  report = Array.from(new Set(report));

  id_list.forEach((e) => map.set(e, 0));

  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" ");
    map.set(report[i][1], map.get(report[i][1]) + 1);
  }
  console.log(report.length);
  const criminal = [];
  map.forEach((val, key) => {
    if (val >= k) {
      criminal.push(key);
    }
  });
  console.log(report);
  console.log(criminal);
  for (let i = 0; i < report.length; i++) {
    for (let j = 0; j < criminal.length; j++) {
      if (report[i][1] === criminal[j]) {
        answer[id_list.indexOf(report[i][0])]++;
      }
    }
  }

  return answer;
}
