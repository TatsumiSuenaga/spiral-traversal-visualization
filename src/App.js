import "./styles.css";
import Grid from "./components/Grid";

/**
 * Plan:
 *  1. design will be left column panel (collapsable?) with
 *     main middle column, maybe with a header. Finally right column
 *     with code block. Implement with Grid?
 *  2. State management? state contains grid size, maybe
 */
export default function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}
