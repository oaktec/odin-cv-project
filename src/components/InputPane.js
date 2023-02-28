import React from "react";

import InputCategory from "./InputCategory";

function InputPane() {
  return (
    <div className="input-pane">
      <InputCategory
        category="Personal Details"
        fields={[
          { name: "name", label: "Name" },
          { name: "title", label: "Title" },
        ]}
      />
      <InputCategory
        category="Education"
        fields={[{ name: "school", label: "School" }]}
      />
      <InputCategory
        category="Work Experience"
        fields={[{ name: "company", label: "Company" }]}
      />
    </div>
  );
}

export default InputPane;
