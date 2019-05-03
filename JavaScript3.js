// function execution in context

var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMonthlyFee: function(fee){
    this.total = this.total - fee;
    return this.name + ' remaining balance is ' + this.total;
  }
}

console.log(monica.deductMonthlyFee(100));
// Monical Geller remaining balance is 400

var deduct = monica.deductMonthlyFee;
console.log(deduct(100)); // undefined remaining balance is NaN
