import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Container from "./Container";
import "./SwitchTransitionComp.css";
import SwitchTransitionContainer from "./SwitchTransitionContainer";
export default function SwitchTransitionComp() {
  const [isShow, setIsShow] = useState(false);

  const toggleIsShow = () => {
    setIsShow((isShow) => !isShow);
  };
  const clickHandler = () => {
    toggleIsShow();
  };

  return (
    <div style={{ width: "600px", height: "600px" }}>
      <div>
        <button onClick={clickHandler}>{isShow ? "hide" : "show"}</button>
      </div>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isShow ? 1 : 2}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div>{isShow ? <Container key={1} /> : <Container key={2} />}</div>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransitionContainer
        isShow={isShow}
        element1={<Container key={1} />}
        element2={<Container key={2} />}
        classNames="move"
        mode="out-in"
      />
    </div>
  );
}
