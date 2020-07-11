/**
 * @param {string} date
 * @return {string}
**/

const months = {
  "Jan": "01",
  "Feb": "02",
  "Mar": "03",
  "Apr": "04",
  "May": "05",
  "Jun": "06",
  "Jul": "07",
  "Aug": "08",
  "Sep": "09",
  "Oct": "10",
  "Nov": "11",
  "Dec": "12"
}

var reformatDate = function(date) {
  let result = ''
  let day = ''
  const dates = date.split(' ')
  const year = dates[2]
  const month = months[dates[1]]

  for (let i = 0; i < dates[0].length; i++) {
    const num = dates[0][i]
    if (+num > -1) {
      day += num
    }
  }
  
  if (day.length === 1) {
    day = '0' + day
  }

  return result + year + '-' + month + '-' + day
};


const date1 = "20th Oct 2052"
const output1 = "2052-10-20"
console.log(reformatDate(date1), output1)

const date2 = "6th Jun 1933"
const output2 = "1933-06-06"
console.log(reformatDate(date2), output2)

const date3 = "26th May 1960"
const output3 ="1960-05-26"
console.log(reformatDate(date3), output3)

