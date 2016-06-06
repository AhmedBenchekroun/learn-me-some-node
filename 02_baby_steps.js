// console.log(process.argv);

var sum = function(x) {
  var total = 0;
  for (var i= 2; i< x.length; i++) {
    
    total += Number(x[i]);
    
  }
  console.log(total);
};

sum(process.argv);


// var sum = function(x) {
//   var total = 0;
//   for (var i= 0; i< x.length; i++) {
//     total += parseInt(x[i], 10);
    
//   }
//   console.log(total);
// };