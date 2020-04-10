class SlidingWindow{
  constructor(windowSize) {
    this.deque = []; // for storing the indexex of the 'k' elements in the input 
    this.windowSize = windowSize;
  }

  compute(input){   
    let output = [];

    if(!input || input.length === 0) {
        return [];
    }

    if(input.length < this.windowSize) {
        return input;
    }

    for(let i=0; i < input.length; i++) {
        
        //if the index in the first element of the this.deque is out of bound (i.e. idx <= i-this.windowSize) then remove it
        if(this.deque.length > 0 && this.deque[0] === i-this.windowSize) {
            this.deque.shift(); //remove the first element
        }
                
        this.deque.push(i)
        
        if(i+1 >= this.windowSize) {
            output.push(this.deque.map(idx => input[idx]));
        }
    }
    return output;
  }
}

//Here is how to use it:
let slidingWindow = new SlidingWindow(3);

console.log('computed sliding windows: '+JSON.stringify(slidingWindow.compute([1,2,3,4,5,6,7,8,9])));
