import "./index.css";

import { useSelector, useDispatch } from "react-redux";

import ActionButton from "./components/ActionButton/ActionButton.component";
import Counter from "./components/Counter/Counter.component";

export default function App() {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="btn-container">
        <ActionButton
          handleClick={() => {
            dispatch({ type: "GOOD" });
          }}
          label={"GOOD"}
        />
        <ActionButton
          handleClick={() => {
            dispatch({ type: "BAD" });
          }}
          label={"BAD"}
        />
        <ActionButton
          handleClick={() => {
            dispatch({ type: "OK" });
          }}
          label={"OK"}
        />
      </div>
      <table className="greyGridTable">
        <tbody>
          <Counter name="GOOD" value={appState.good} />
          <Counter name="OK" value={appState.ok} />
          <Counter name="BAD" value={appState.bad} />
        </tbody>
      </table>
    </div>
  );
}
