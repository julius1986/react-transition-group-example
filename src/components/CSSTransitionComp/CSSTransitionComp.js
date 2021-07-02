import React, { useState } from "react";
import "./CSSTransitionComp.css";
import BoxComponent from "../BoxComponent";
import { CSSTransition } from "react-transition-group";
import FadeInCSSTransition from "./FadeInCSSTransition";

export default function CSSTransitionComp() {
  const [isShow, setIsShow] = useState(false);

  const clickHandler = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <>
      <div>
        <button onClick={clickHandler}>{isShow ? "hide" : "show"}</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <CSSTransition
          in={isShow}
          timeout={200}
          classNames="box1"
          unmountOnExit
        >
          <BoxComponent key={1} />
        </CSSTransition>

        <FadeInCSSTransition
          in={isShow}
          timeout={200}
          classNames="box1"
          unmountOnExit
        >
          <BoxComponent key={2} />
        </FadeInCSSTransition>

        <FadeInCSSTransition in={isShow} timeout={200} classNames="box2">
          <BoxComponent
            className={`${isShow ? null : "box2-exit-done"}`}
            key={3}
          />
        </FadeInCSSTransition>
      </div>
    </>
  );
}
