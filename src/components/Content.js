import React from "react";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function Content() {
  return (
    <div className="content-container">
      <InputPane />
      <PreviewPane />
    </div>
  );
}

export default Content;
