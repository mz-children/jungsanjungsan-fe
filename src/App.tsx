import Router from "./router";
import "./App.css";
import ReactQueryContext from "./context/reactQuery.context";

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
