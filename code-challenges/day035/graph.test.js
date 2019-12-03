const Graph = require('./graph');


describe.skip('Graph', () => {

  let graph = new Graph();

  it('can add vertices to graph', () => {
    graph.addVertex('A');
    expect(graph.includes('A')).toBeTruthy();
    expect(graph.includes('B')).toBeFalsy();
  });
  it('can add edges to graph', () => {
    graph.addVertex('B')
    graph.addEdge('A', 'B', 4)
    expect(graph.getNeighbors('A')).toEqual([['B', 4]])
  });
  it('can get size of graph', () => {
    expect(graph.getSize()).toBe(2);
  });
  it('can get all vertices', () => {
    expect(graph.getVertices()).toEqual(['A', 'B']);
  })
});
