function deletionDistance(str1, str2) {
  const hash = {}
  let count = 0

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = (hash[str1[i]] || 0) + 1
  }

  for (let i = 0; i < str2.length; i++) {
    if (!hash[str2[i]]) {
      count += 1
    } else if (hash[str2[i]] < -1) {
      count += 1
    } else {
      hash[str2[i]]--
    }
  }

  return count 
}


const str1 = "dog"
const str2 = "frog"
console.log(deletionDistance(str1, str2), 3)

const str3 = "some"
const str4 = "some"
console.log(deletionDistance(str3, str4), 0)

const str5 = "some"
const str6 = "thing"
console.log(deletionDistance(str5, str6), 9)

const str7 = ""
const str8 = ""
console.log(deletionDistance(str7, str8), 0)
