// import modules
import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

// import utils
import { getTransitionRecursive } from "../utils/helper.util";

// import components
import Icon from "./Icon";

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
  background-color: ${({ isVisible }) => (isVisible ? "purple" : "white")};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0.25rem 0.25rem 1rem 0.25rem black;
  box-shadow: 0.25rem 0.25rem 1rem -0.25rem black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 100ms ease-out;
`;

// handle clearTimeout answer: https://stackoverflow.com/questions/67642415/why-settimeout-is-not-triggering-inside-usecallback-reactjs

const DelayCell = ({ waitTime = 500, iconName, visible = false }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const timerRef = useRef();

  const handleDelay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }, waitTime);
  }, [waitTime, timerRef]);
  useEffect(() => {
    handleDelay();
  }, [handleDelay]);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsVisible(true), waitTime);
  //   return () => clearTimeout(timer);
  // }, [waitTime]);

  return (
    <GridCell isVisible={isVisible} className="grid-child">
      {isVisible && <Icon name={iconName} />}
    </GridCell>
  );
};

export default function Grid() {
  const [isVisible, setIsVisible] = useState(false);
  const GRID_SIZE = 5;
  const BASE_TRANSITION = 100;
  const gridMatrix = getTransitionRecursive(GRID_SIZE, BASE_TRANSITION);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getGrid = gridMatrix.map((row, idx) => (
    <GridRow key={idx}>
      {row.map((cell, key) => (
        <DelayCell
          key={key}
          waitTime={cell?.duration}
          iconName={cell?.iconName}
        />
      ))}
    </GridRow>
  ));

  return <GridContainer>{getGrid}</GridContainer>;
}
