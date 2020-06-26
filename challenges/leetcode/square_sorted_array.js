var sortedSquares = function (A) {
  const squares = A.map((j) => j * j);

  return squares.sort((a, b) => a - b);
};
