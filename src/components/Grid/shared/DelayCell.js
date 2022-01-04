// import modules
import React, { useState, useEffect } from "react";
import * as Icons from "react-feather";

// import components
import Icon from "../../Icon";
import Modal from "../../Modal/Modal";
import { GridCell } from "./DelayCell.style";

// import context
import { useGridContext } from "../context";

const DelayCell = ({ waitTime = 500, iconName, visible = false }) => {
  const { setShowGrid } = useGridContext();
  const [isVisible, setIsVisible] = useState(visible);
  const [showModal, setShowModal] = useState(false);
  const isLastCell = iconName === Icons.Smile;
  const returnHandler = () => setShowGrid(false);
  const returnText = "Yup";
  const blurbText = "Want to try a different grid size?";

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
      {showModal && (
        <Modal
          returnHandler={returnHandler}
          returnText={returnText}
          blurbText={blurbText}
        />
      )}
    </GridCell>
  );
};

export default DelayCell;
