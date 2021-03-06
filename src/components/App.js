// import modules
import React, { useState } from "react";

// import styles
import "../styles.css";

// import components
import Grid from "./Grid/Grid";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

// import context
import { GridContextProvider } from "./Grid/context";

const App = () => {
  // place in React.useMemo if performance gets wonky
  const [showGrid, setShowGrid] = useState(false);
  const [gridSize, setGridSize] = useState(5);

  return (
    <div className="App">
      <GridContextProvider
        values={{ showGrid, setShowGrid, gridSize, setGridSize }}
      >
        {showGrid ? <Grid /> : <SettingsPanel />}
      </GridContextProvider>
    </div>
  );
};

export default App;
