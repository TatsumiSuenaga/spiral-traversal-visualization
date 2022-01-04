// import modules
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export { GridContainer, GridRow };
