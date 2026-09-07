import Router from "./router";
import ReactQueryContext from "./context/reactQuery.context";

import "./App.css";
import ModalRenderer from "./context/ModalRenderer";

function App() {
  return (
    <>
      <ReactQueryContext>
        <Router />
        <ModalRenderer />
      </ReactQueryContext>
    </>
  );
}

export default App;
