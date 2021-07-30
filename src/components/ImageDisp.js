import React, { useState } from "react";
import bgimage from "./bgImage.png";
function ImageDisp() {
  return (
    <div>
      <img src={bgimage} alt={"Image"} />
    </div>
  );
}

export default ImageDisp;
