let array =[ [ 1, 15, 22, 29, 8 ], [ 12, 19, 26, 5 ] ]
  
let newArray= [...array[0],...array[1]]
// var numArray = [140000, 104, 99];
newArray.sort(function(a, b) {
  return a - b;
});


console.log(newArray)

