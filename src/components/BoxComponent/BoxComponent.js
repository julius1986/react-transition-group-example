import React, { memo } from "react";
import randomHexColor from "../../utils/randomHexColor";

export default memo(function BoxComponent() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: randomHexColor(),
      }}
    ></div>
  );
})
