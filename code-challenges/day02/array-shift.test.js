//Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
const insertShift = require('./array-shift');

describe.skip('array-shift', () => {
  it('takes in an array and the value and returns a new array with new value added to middle', () =>{
    let array = [6, 5, 4, 3, 2, 1];
    
    let shifted = insertShift(array, 7);
    expect(shifted).toEqual([6, 5, 4, 7, 3, 2, 1]);
  });
  it('will work with an empty array', () => {
    let array = [];
    let shifted = insertShift(array, 7);
    expect(shifted).toEqual([7]);
  });
  it('will work with an array with a single value', () => {
    let array = [6];
    let shifted = insertShift(array, 7);
    expect(shifted).toEqual([7, 6]);
  })
})