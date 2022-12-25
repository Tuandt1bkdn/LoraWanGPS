import { useReducer } from "react";
import Context from "./Context";
import reducer, { initDriver } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initDriver);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
