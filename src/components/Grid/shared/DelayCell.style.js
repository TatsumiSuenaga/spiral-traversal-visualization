// import modules
import styled from "styled-components";

const GridCell = styled.div`
  align-items: center;
  background-color: ${({ isVisible }) => (isVisible ? "#51344D" : "#FFF")};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0.25rem 0.25rem 1rem 0.25rem black;
  box-shadow: 0.25rem 0.25rem 1rem -0.25rem black;
  display: flex;
  height: 1.5rem;
  padding: 0.5rem;
  justify-content: center;
  transition: all 100ms ease-out;
  width: 1.5rem;
`;

export { GridCell };
