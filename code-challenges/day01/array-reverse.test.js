const reverse = require('./array-reverse');

describe('array reverse', () => {
  it('reverses an array', () => {
    let array = [1, 2, 3, 4, 5];
    let reversed = reverse(array);
    expect(reversed).toEqual([5, 4, 3, 2, 1]);
  })
});
