const {Cat, Dog, AnimalShelter} = require('./fifo-animal-shelter');

describe('fifo-animal-shelter', () => {
  let shelter;
  beforeAll(() => {
    shelter = new AnimalShelter();
  });
  it('can enqueue new animals', () => {
    shelter.enqueue(new Dog('Rex'));
    expect(shelter.toString()).toBe('[Rex]');
    shelter.enqueue(new Cat('Ginger'));
    expect(shelter.toString()).toBe('[Rex, Ginger]');
  });
});
