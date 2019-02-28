const eliminateDuplicates = () => {
//Array Creation
  const aLength = 60;
  const maxValue = 20;
  let a = Array(aLength)
  for (let index = 0; index < a.length; index++) {
    a[index] = Math.floor(Math.random() * maxValue); 
  }
  console.log(a)
  a = a.sort()
  console.log(a)


  let readIndex = 1;
  let writeIndex = 1;
  while (readIndex < a.length) {
    if (a[readIndex] !== a[writeIndex-1]) {
      a[writeIndex] = a[readIndex]
      writeIndex++
    }
    readIndex++
  }
  console.log(a)
  const b = a.slice(0,writeIndex)
  console.log(b)
  return b;
}

