import React from "react";
import styled from "styled-components";
import { useGridContext } from "../../context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin: 0rem;
  margin-bottom: 1.5rem;
`;

export const Blurb = styled.h4`
  font-size: 1rem;
  margin: 0rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || "2.5rem"};
`;

const Input = styled.input`
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  width: 120px;
`;

// TODO: make reuseable
export const Button = styled.button`
  background-color: #2374ab;
  border-radius: ${({ isModal }) =>
    isModal ? `0.5rem` : `0rem 0.5rem 0.5rem 0rem`};
  border: 1px solid black;
  border-left: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.5rem 0.75rem;
  transition: background-color 100ms ease-in;
  text-transform: uppercase;

  &:hover {
    background-color: #51344d;
  }
`;

const SettingsPanel = () => {
  const { setShowGrid, gridSize, setGridSize } = useGridContext();
  const gridHandler = (event) =>
    setGridSize(parseInt(event?.target?.value, 10));
  const startTraversalHandler = () => setShowGrid(true);

  const emoji = (
    <span role="img" aria-label="SMILING FACE WITH SUNGLASSES">
      &#128526;
    </span>
  );

  return (
    <Container>
      <Header>Spiral Traversal</Header>
      <Blurb>Enter a grid size, then enjoy the spiral {emoji}</Blurb>
      <div>
        <Input type="number" value={gridSize} onChange={gridHandler} />
        <Button onClick={startTraversalHandler}>start</Button>
      </div>
    </Container>
  );
};

export default SettingsPanel;
