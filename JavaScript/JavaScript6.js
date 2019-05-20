// Observer pattern
//
function KeyDownSubject() {
  this.handlers = [];
}

KeyDownSubject.prototype.subscribe = function(handler){
  if (this.handlers.indexOf(handler) === -1){
    this.handlers.push(handler);
  }
}

KeyDownSubject.prototype.unsubscribe = function(handler){
  this.handlers = this.handlers.filter(function(item){
  return item !== handler;
  })
}

KeyDownSubject.prototype.fire = function(message, scope){
  let currentScope = scope || this;

  this.handlers.forEach(function(handler) {
    handler.call(currentScope, message);
  })
}

// log helper
let log = (function(){
  let log = "";

  return {
    add: function(msg) { log += msg + "\n"; },
    show: function() {console.log(log); log = "";}
  }
})

function run(){
  let keyDownHandler = function(item){
    log.add("fired :" + item);
  };

  // instantiate object
  let keydown = new KeyDownSubject();

  // subscribe
  keydown.subscribe(keyDownHandler);
  keydown.fire('event # 1');

  // unsubscribe
  keydown.unsubscribe(keyDownHandler);
  keydown.fire('event # 2');

  // subscribe
  keydown.subscribe(keyDownHandler);
  keydown.fire('event # 3');

  // subscribe
  keydown.subscribe(keyDownHandler);
  keydown.fire('event # 3');
  // show log
  log.show();
}

run();
