// import modules
import React, { useState } from "react";

// import context
import { useGridContext } from "../Grid/context";

// import components
import {
  PanelContainer,
  Header,
  Blurb,
  Input,
  Button
} from "./SettingsPanel.style";
import Modal from "../Modal/Modal";

const SettingsPanel = () => {
  const { setShowGrid, gridSize, setGridSize } = useGridContext();
  const [showModal, setShowModal] = useState(false);
  const gridHandler = (event) =>
    setGridSize(parseInt(event?.target?.value, 10));
  const startTraversalHandler = () => {
    if (gridSize > 0 && gridSize < 15) {
      setShowGrid(true);
    } else {
      setShowModal(true);
    }
  };

  // Modal values
  const returnHandler = () => setShowModal(false);
  const returnText = "Gotcha";
  const blurbText = "Invalid entry, please try a positive number less than 15";

  const emoji = (
    <span role="img" aria-label="SMILING FACE WITH SUNGLASSES">
      &#128526;
    </span>
  );

  return (
    <PanelContainer>
      <Header>Spiral Traversal</Header>
      <Blurb>Enter a grid size, then enjoy the spiral {emoji}</Blurb>
      <div>
        <Input type="number" value={gridSize} onChange={gridHandler} />
        <Button onClick={startTraversalHandler}>start</Button>
      </div>
      {showModal && (
        <Modal
          returnHandler={returnHandler}
          returnText={returnText}
          blurbText={blurbText}
        />
      )}
    </PanelContainer>
  );
};

export default SettingsPanel;
