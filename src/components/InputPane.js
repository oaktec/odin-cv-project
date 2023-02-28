import React from "react";

import InputCategory from "./InputCategory";

function InputPane() {
  return (
    <div className="input-pane">
      <InputCategory category="Personal Details" />
      <InputCategory category="Education" />
      <InputCategory category="Work Experience" />
    </div>
  );
}

export default InputPane;
