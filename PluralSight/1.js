class MegaArray extends Array{
  constructor(contents){
    super()
    this.contents = contents;
  }
}

let mArr = new MegaArray(1, 2, 3);
console.log(mArr)
