function dfs(graph, root, array = []) {
  let node = root;
  let arrayOfValues = array;

  // push value of node to array
  arrayOfValues.push(node);

  // search children nodes recursively
  for (let i = 0; i < graph[node].length; i++) {
    if (graph[node][i] === 1 && arrayOfValues.indexOf(i) === -1) {
      dfs(graph, i, arrayOfValues);
    }
  }

  return arrayOfValues;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(dfs(exDFSGraph, 3));
