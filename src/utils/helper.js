export const getTransitionRecursive = (gridSize, baseTransitionDuration) => {
  let grid = Array.from(Array(gridSize), () => new Array(gridSize));

  const spiralTraversalHelper = (size, start, transitionSum) => {
    if (size <= 0) {
      return;
    }

    let sum = transitionSum;

    // increment transition time by column, ex: [start, start] -> [start, end]
    for (let i = start; i < size; i++) {
      sum += baseTransitionDuration;
      grid[start][i] = sum;
    }

    // increment transition time by row, ex: [start, end] -> [end, end]
    for (let i = start + 1; i < size; i++) {
      sum += baseTransitionDuration;
      grid[i][size - 1] = sum;
    }

    // decrement transition time by column, ex: [end, end] -> [end, start]
    for (let i = size - 2; i >= start; i--) {
      sum += baseTransitionDuration;
      grid[size - 1][i] = sum;
    }

    // decrement transition time by row, ex: [end, start] -> [start + 1, start]
    for (let i = size - 2; i >= start + 1; i--) {
      sum += baseTransitionDuration;
      grid[i][start] = sum;
    }

    return spiralTraversalHelper(size - 1, start + 1, sum);
  };

  spiralTraversalHelper(gridSize, 0, 0);

  return grid;
};
