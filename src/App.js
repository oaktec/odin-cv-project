import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [editMode, setEditMode] = React.useState(true);

  const toggleEditMode = () => {
    console.log(editMode);
    setEditMode(!editMode);
  };

  return (
    <div className="App">
      <Header toggleEditMode={toggleEditMode} editMode={editMode} />
      <Content editMode={editMode} />
    </div>
  );
}

export default App;
