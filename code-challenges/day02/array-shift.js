//Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

module.exports = function insertShift(array, value){
  let arrayMid = Math.floor(array.length / 2);
  return [
    ...array.slice(0, arrayMid),
    value,
    ...array.slice(arrayMid, array.length),
  ];
}
