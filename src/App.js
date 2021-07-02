import "./App.css";
import JsTransition from "./components/JsTransition";
import CSSTransitionComp from "./components/CSSTransitionComp";
function App() {
  return (
    <div className="App">
      <div>
        <h2>Js transition.</h2>
        <JsTransition />
        <h2>CSS transition.</h2>
        <CSSTransitionComp />
      </div>
    </div>
  );
}

export default App;
