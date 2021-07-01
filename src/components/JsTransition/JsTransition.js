import React, { useState } from "react";
import BoxComponent from "../BoxComponent";
export default function JsTransition() {
  const [isShow, setIsShow] = useState(false);
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
        <BoxComponent />
        <BoxComponent />
      </div>
    </>
  );
}
