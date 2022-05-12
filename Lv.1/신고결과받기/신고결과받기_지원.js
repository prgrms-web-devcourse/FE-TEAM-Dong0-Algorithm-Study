function solution(id_list, report, k) {
let answer = {}
let userTable = {}
const removedReport = new Set(report)

    for (const id of id_list) {
        userTable[id] = [0]
        answer[id] = 0 //id_list 담긴 순서 보장
    }


    for (const report of removedReport) {
        const [reporter, reported] = report.split(' ')
        userTable[reported].push(reporter)
        userTable[reported][0] += 1
    }

    for(const user of Object.keys(userTable)) {
        if(userTable[user][0] >= k) {
            for (let i=1;i<userTable[user].length;++i) {
                answer[userTable[user][i]] += 1
            }
        }
    }

    return Object.values(answer)

}
