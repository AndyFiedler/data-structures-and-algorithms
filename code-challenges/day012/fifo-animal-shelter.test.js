const {Cat, Dog, AnimalShelter} = require('./fifo-animal-shelter');

describe('fifo-animal-shelter', () => {
  let shelter;
  beforeAll(() => {
    shelter = new AnimalShelter();
  });
  it('can enqueue new animals', () => {
    expect(shelter.toString()).toBe('[]');
    shelter.enqueue(new Dog('Rex'));
    expect(shelter.toString()).toBe('[Rex]');
    shelter.enqueue(new Cat('Ginger'));
    expect(shelter.toString()).toBe('[Rex, Ginger]');
  });
  it('can dequeue animals without preference', () => {
    expect(shelter.dequeue().name).toBe('Rex');
    expect(shelter.toString()).toBe('[Ginger]');
    expect(shelter.dequeue().name).toBe('Ginger');
    expect(shelter.toString()).toBe('[]');
  });
  it('it can dequeue animals by preference', () => {
    shelter.enqueue(new Dog('Rufus'));
    shelter.enqueue(new Cat('Snuffles'));
    expect(shelter.dequeue('cat').name).toBe('Snuffles');
    expect(shelter.dequeue('cat')).toBe(null);
    expect(shelter.dequeue('dog').name).toBe('Rufus');
    expect(shelter.dequeue('dog')).toBe(null);
  });
});
