// import modules
import React from "react";
import ReactDOM from "react-dom";

// import components
import { Button, Blurb } from "../SettingsPanel/SettingsPanel.style";
import { Backdrop, ModalContainer } from "./Modal.style";

const Modal = ({ blurbText, returnHandler, returnText }) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ModalContainer>
        <Blurb marginBottom="1.5rem">{blurbText}</Blurb>
        <Button isModal onClick={returnHandler}>
          {returnText}
        </Button>
      </ModalContainer>
    </Backdrop>,
    document.body
  );
};

export default Modal;
