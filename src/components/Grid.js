// import modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import utils
import { getTransitionRecursive } from "../utils/helper";

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;

  > .grid-child {
    margin: 0.25rem;
  }

  &:first-child {
    margin-left: 0rem;
  }

  &:last-child {
    margin-right: 0rem;
  }
`;

const GridCell = styled.div`
  background-color: purple;
  border: 1px solid black;
  padding: 1.5rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;
`;

export default function Grid() {
  const [isVisible, setIsVisible] = useState(false);
  const GRID_SIZE = 7;
  const BASE_TRANSITION = 300;
  const gridMatrix = getTransitionRecursive(GRID_SIZE, BASE_TRANSITION);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getGrid = gridMatrix.map((row, idx) => (
    <GridRow key={idx}>
      {row.map((cell, key) => (
        <GridCell
          isVisible={isVisible}
          className="grid-child"
          key={key}
          transitionDuration={cell}
        />
      ))}
    </GridRow>
  ));

  return <GridContainer>{getGrid}</GridContainer>;
}
