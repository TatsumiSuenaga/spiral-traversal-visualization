// import modules
import styled from "styled-components";

const Backdrop = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 300ms ease-in;
  z-index: 100;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
`;

export { Backdrop, ModalContainer };
