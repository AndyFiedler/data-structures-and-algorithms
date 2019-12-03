'use strict';

class Graph {
  constructor(numOfVertices){
    this.numOfVertices = numOfVertices;
    this.adjacencyMap = new Map();
  }

  addVertex(vertex) {
    this.adjacencyMap.set(vertex, new Map());
  }

  addEdge(from, to, weight = 0) {
    if (!this.includes(from)) throw `Graph does not include: ${from}`;
    if (!this.includes(to)) throw `Graph does not include: ${to}`;
    this.adjacencyMap.get(from).set(to, weight);
    this.adjacencyMap.get(to).set(from, weight);
  }

  includes(vertex) {
    return this.adjacencyMap.has(vertex);
  }

  getSize() {
    return this.getVertices().length;
  }

  getVertices(){
    return [...this.adjacencyMap.keys()];
  }

  getNeighbors(vertex){
    if (!this.includes(vertex)) throw `Graph does not include: ${from}`;
    return [...this.adjacencyMap.get(vertex)];
  }

}

module.exports = Graph;
