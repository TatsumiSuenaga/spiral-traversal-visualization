// import modules
import React from "react";

// import utils
import { getTransitionRecursive } from "../../utils/helper.util";
import { useGridContext } from "./context";

// import components
import { GridContainer, GridRow } from "./Grid.style";
import DelayCell from "./shared/DelayCell";

const Grid = () => {
  const { gridSize } = useGridContext();
  const BASE_TRANSITION = 100;
  const gridMatrix = getTransitionRecursive(gridSize, BASE_TRANSITION);

  return (
    <GridContainer>
      {gridMatrix.map((row, idx) => (
        <GridRow key={idx}>
          {row.map((cell, key) => (
            <DelayCell
              key={key}
              waitTime={cell?.duration}
              iconName={cell?.iconName}
            />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
