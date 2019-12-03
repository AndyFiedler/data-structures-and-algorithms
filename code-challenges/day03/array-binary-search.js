//Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

module.exports = function binarySearch(array, value) {
  let start = 0;
  let index;
  let end = array.length;
  while (start < end){
    index = Math.floor(((end -start)/2)+start);
    if (array[index] === value){
      break;
    }
    if (array[index] > value){
      end = index -1;
    } else {
      start = index +1;
    }
  }
  if (index < 0 || index >= array.length || array[index] !== value) {
    return -1;
  }
  return index;
}