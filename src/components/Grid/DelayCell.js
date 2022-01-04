// import modules
import React, { useState, useEffect } from "react";
import * as Icons from "react-feather";
import styled from "styled-components";

// import components
import Icon from "../Icon";
import Modal from "../Modal/Modal";

const GridCell = styled.div`
  align-items: center;
  background-color: ${({ isVisible }) => (isVisible ? "#51344D" : "#FFF")};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0.25rem 0.25rem 1rem 0.25rem black;
  box-shadow: 0.25rem 0.25rem 1rem -0.25rem black;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  padding: 1rem;
  transition: all 100ms ease-out;
  width: 1.5rem;
`;

const DelayCell = ({ waitTime = 500, iconName, visible = false }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [showModal, setShowModal] = useState(false);
  const isLastCell = iconName === Icons.Smile;

  // no need to put in a callback as we want to create a new grid every run
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), waitTime);
    let modalTimer = null;
    if (isLastCell) {
      setTimeout(() => setShowModal(true), waitTime + 3000);
    }

    return () => {
      clearTimeout(timer);
      if (isLastCell) {
        clearTimeout(modalTimer);
      }
    };
  }, [waitTime, isLastCell]);

  return (
    <GridCell isVisible={isVisible} className="grid-child">
      {isVisible && <Icon name={iconName} />}
      {showModal && <Modal />}
    </GridCell>
  );
};

export default DelayCell;
