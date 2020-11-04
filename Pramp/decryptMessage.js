function decrypt(word) {
  let secondStep = 1
  let decryption = ""
  
  for (let i = 0; i < word.length; i++) {
    let newLetterAscii = word[i].charCodeAt(0) - secondStep
    
    while(newLetterAscii < "a".charCodeAt(0)) {
      newLetterAscii += 26
    }
      decryption = decryption + String.fromCharCode(newLetterAscii)
      secondStep += newLetterAscii
  }
  
  return decryption
}

const strToA = "d".charCodeAt(0) - 1 // convert to ASCII
const AToStr = String.fromCharCode(strToA) // ASCII to string

const z = "z".charCodeAt(0)

console.log(strToA, AToStr, z)

console.log(decrypt("dnotq"), "crime")
console.log(decrypt("flgxswdliefy"), "encyclopedia")
