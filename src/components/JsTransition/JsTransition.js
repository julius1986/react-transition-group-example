import React, { useState } from "react";
import { Transition } from "react-transition-group";
import BoxComponent from "../BoxComponent";
import FadeIn from "./FadeInTransition";
export default function JsTransition() {
  const [isShow, setIsShow] = useState(false);

  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const toggleIsShow = () => {
    setIsShow((show) => !show);
  };
  const clickHandler = () => {
    toggleIsShow();
  };

  return (
    <>
      <div>
        <button onClick={clickHandler}>{isShow ? "hide" : "show"}</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Transition in={isShow} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <BoxComponent key="1" />
            </div>
          )}
        </Transition>
        <FadeIn in={isShow} timeout={duration}>
          <BoxComponent key="2" />
        </FadeIn>
      </div>
    </>
  );
}
