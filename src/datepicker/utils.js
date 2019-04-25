function getFirstDay(date) {
  const [year, month, day] = getYearMonthDay(date)
  return new Date(year, month, 1)
}

function getLastDay(date) {
  const [year, month, day] = getYearMonthDay(date)
  return new Date(year, month + 1, 0)
}

function getYearMonthDay(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return [year, month, day]
}

function range(begin, end) {
  const array = []
  for (let i = 0; i < end; i++) {
    array.push(i)
  }
  return array
}

export {
  getFirstDay,
  getLastDay,
  getYearMonthDay,
  range
}