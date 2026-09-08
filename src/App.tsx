import Router from "./router";
import ReactQueryContext from "./context/reactQuery.context";

import "./App.css";

function App() {
  return (
    <>
      <ReactQueryContext>
        <Router />
      </ReactQueryContext>
    </>
  );
}

export default App;
