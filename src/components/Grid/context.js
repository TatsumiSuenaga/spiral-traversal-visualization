// import modules
import React, { createContext, useContext } from "react";

const GridContext = createContext(null);

const useGridContext = () => useContext(GridContext);

const GridContextProvider = ({ values, children }) => {
  return (
    <GridContext.Provider value={{ ...values }}>
      {children}
    </GridContext.Provider>
  );
};

export { GridContext, GridContextProvider, useGridContext };
