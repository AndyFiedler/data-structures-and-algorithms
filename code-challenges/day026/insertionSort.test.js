'use strict';
const insertionSort = require('./insertionSort');

describe.skip('insertionSort(arr) tests', () =>{
  it('sorts an array of integers from smallest to greatest', () => {
    let array1 = [3,5,2,7,1];
    insertionSort(array1);
  })
})