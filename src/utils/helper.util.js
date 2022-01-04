// import modules
import * as Icons from "react-feather";

const getTransitionRecursive = (gridSize, baseTransitionDuration) => {
  let grid = Array.from(Array(gridSize), () => new Array(gridSize));
  const lastY = gridSize % 2 === 0 ? gridSize / 2 : (gridSize - 1) / 2;
  const lastX = Math.floor((gridSize - 1) / 2);

  const spiralTraversalHelper = (size, start, transitionSum) => {
    if (size <= 0) {
      grid[lastY][lastX].iconName = Icons.Smile;
      return;
    }

    let sum = transitionSum;

    // increment transition time by column, ex: [start, start] -> [start, end]
    for (let i = start; i < size; i++) {
      let iconName = null;
      sum += baseTransitionDuration;

      switch (i) {
        case 0:
          iconName = Icons.Frown;
          break;
        case size - 1:
          iconName = Icons.CornerRightDown;
          break;
        default:
          iconName = Icons.ArrowRight;
          break;
      }

      grid[start][i] = { duration: sum, iconName: iconName };
    }

    // increment transition time by row, ex: [start, end] -> [end, end]
    for (let i = start + 1; i < size; i++) {
      let iconName = null;
      sum += baseTransitionDuration;

      switch (i) {
        case size - 1:
          iconName = Icons.CornerDownLeft;
          break;
        default:
          iconName = Icons.ArrowDown;
          break;
      }

      grid[i][size - 1] = { duration: sum, iconName: iconName };
    }

    // decrement transition time by column, ex: [end, end] -> [end, start]
    for (let i = size - 2; i >= start; i--) {
      let iconName = null;
      sum += baseTransitionDuration;

      switch (i) {
        case start:
          iconName = Icons.CornerLeftUp;
          break;
        default:
          iconName = Icons.ArrowLeft;
          break;
      }
      grid[size - 1][i] = { duration: sum, iconName: iconName };
    }

    // decrement transition time by row, ex: [end, start] -> [start + 1, start]
    for (let i = size - 2; i >= start + 1; i--) {
      let iconName = null;
      sum += baseTransitionDuration;

      switch (i) {
        case start + 1:
          iconName = Icons.CornerUpRight;
          break;
        default:
          iconName = Icons.ArrowUp;
          break;
      }
      grid[i][start] = { duration: sum, iconName: iconName };
    }

    return spiralTraversalHelper(size - 1, start + 1, sum);
  };

  spiralTraversalHelper(gridSize, 0, 0);

  return grid;
};

export { getTransitionRecursive };
