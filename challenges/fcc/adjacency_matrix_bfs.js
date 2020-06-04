function bfs(graph, root) {
  // Distance object returned
  let nodesLen = {};
  let queue = [[root, 0]];

  while (queue.length) {
    // select the next item in the queue
    let node = queue.shift();

    // assign new value with distance
    nodesLen[node[0]] = node[1];

    // find children nodes and push them to queue
    for (let i = 0; i < graph[node[0]].length; i++) {
      if (graph[node[0]][i] === 1 && !nodesLen.hasOwnProperty(i)) {
        queue.push([i, node[1] + 1]);
      }
    }
  }

  // get any remaining unconnected nodes
  for (let j = 0; j < graph.length; j++) {
    if (!nodesLen.hasOwnProperty(j)) {
      nodesLen[j] = Infinity;
    }
  }

  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(bfs(exBFSGraph, 3));
