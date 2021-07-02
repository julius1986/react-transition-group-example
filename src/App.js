import "./App.css";
import JsTransition from "./components/JsTransition";
import CSSTransitionComp from "./components/CSSTransitionComp";
import SwitchTransitionComp from "./components/SwitchTransitionComp";
function App() {
  return (
    <div className="App">
      <div>
        <h2>Js transition.</h2>
        <JsTransition />
        <h2>CSS transition.</h2>
        <CSSTransitionComp />
        <h2>Switch transition.</h2>
        <SwitchTransitionComp />
      </div>
    </div>
  );
}

export default App;
