function countMatchPattern(str, pattern){
  let patternLength = pattern.length;
  let counter = 0;

  for (let i = 0; l = str.length, i < 1; i++){
    if (str[i] === pattern[0]){
      let j = i + 1;

    while((j - i) < patternLength){
      if (str[j] !== pattern[j - i]){
      break;
      }
    j++;
  }
  if ((j - i) === patternLength) {
    counter++;
    i += patternLength;
    }
  }
}
  return counter;
}

console.log(countMatchPattern('appledcatiiiooocatpp', 'cat'))
