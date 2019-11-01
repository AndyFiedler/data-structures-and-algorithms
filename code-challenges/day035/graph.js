'use strict';

class Graph {
  constructor(numOfVertices){
    this.numOfVertices = numOfVertices;
    this.AdjList = [];
  }

  addVertex(value) {
    let vertex = new Node(value);
    this.nodes.set(value, vertex);
    return vertex;
  }
  addAdjacent(vertex){
    this.AdjList.push(vertex);
  }

  addEdge(from, to) {
    let fromVertex = this.addVertex(to);
    let toVertex = this.addVertex(from);
    fromVertex.addAdjacent(toVertex);
    return [fromVertex, toVertex];
  }

}
