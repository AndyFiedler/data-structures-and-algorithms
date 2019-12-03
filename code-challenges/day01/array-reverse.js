
// let arr =
// function reverse(array) {
//     var output = [];
//     while (array.length) {
//       output.push(array.pop());
//     }

//     return output;
//   }
module.exports = function reverse(array){
  let result = [];
  while (array.length > 0){
    result.push(array.pop());
  }

  return result;
};
