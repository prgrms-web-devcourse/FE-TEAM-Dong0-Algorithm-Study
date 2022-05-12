function solution(new_id) {
  const one = step1(new_id)
  const two = step2(one)
  const three = step3(two)
  const four = step4(three)
  const five = step5(four)
  const six = step6(five)
  const seven = step7(six)

  return seven
}

function step1(id) {
  return id.toLowerCase()
}

function step2(id) {
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'.split('')
  const newId = id
    .split('')
    .map((value) => {
      return possible.includes(value) ? value : ''
    })
    .join('')
  return newId
}

function step3(id) {
  const newId = []
  let isBeforeDot = false
  for (const char of id) {
    if (char === '.') {
      if (!isBeforeDot) {
        newId.push('.')
        isBeforeDot = true
      }
    } else {
      newId.push(char)
      isBeforeDot = false
    }
  }

  return newId.join('')
}

function step4(id) {
  if (id[0] === '.') id = id.slice(1)
  if (id[id.length - 1] === '.') id = id.slice(0, id.length - 1)
  return id
}

function step5(id) {
  return id ? id : 'a'
}

function step6(id) {
  let newId = id.length > 15 ? id.substr(0, 15) : id
  if (newId[newId.length - 1] === '.') newId = newId.slice(0, newId.length - 1)
  return newId
}

function step7(id) {
  let newId = ''
  if (id.length > 2) {
    return id
  } else {
    newId = id.length === 1 ? id + id + id : id + id[id.length - 1]
  }
  return newId
}
