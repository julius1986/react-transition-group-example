import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function SwitchTransitionContainer({
  element1,
  element2,
  isShow,
  classNames,
  ...props
}) {
  return (
    <SwitchTransition {...props}>
      <CSSTransition
        key={isShow ? 1 : 2}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames={classNames}
      >
        {isShow ? element1 : element2}
      </CSSTransition>
    </SwitchTransition>
  );
}
