// import modules
import React from "react";
import styled from "styled-components";

// import utils
import { getTransitionRecursive } from "../../utils/helper.util";
import { useGridContext } from "../../context";

// import components
import DelayCell from "./DelayCell";

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 780px;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;

  > .grid-child {
    margin: 0.5rem;
  }

  &:first-child {
    margin-left: 0rem;
  }

  &:last-child {
    margin-right: 0rem;
  }
`;

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
