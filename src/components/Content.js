import React from "react";
import PropTypes from "prop-types";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function Content(props) {
  Content.propTypes = {
    editMode: PropTypes.bool.isRequired,
  };
  const { editMode } = props;

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

  const inputPane = editMode ? (
    <InputPane inputFields={inputFields} setInputFields={setInputFields} />
  ) : null;

  return (
    <div className="content-container">
      {inputPane}
      <PreviewPane inputFields={inputFields} />
    </div>
  );
}

export default Content;
