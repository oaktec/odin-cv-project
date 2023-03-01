import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [editMode, setEditMode] = React.useState(true);
  const [inputFields, setInputFields] = React.useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    description: "",
    educationFields: [],
    workFields: [],
  });

  const toggleEditMode = () => {
    document
      .querySelector(".preview-pane")
      .classList.toggle("preview-pane--main");
    setEditMode(!editMode);
  };

  return (
    <div className="App">
      <Header
        toggleEditMode={toggleEditMode}
        editMode={editMode}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <Content
        editMode={editMode}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
    </div>
  );
}

export default App;
