import React from "react";
import PropTypes from "prop-types";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function Content(props) {
  Content.propTypes = {
    editMode: PropTypes.bool.isRequired,
    inputFields: PropTypes.shape({
      name: PropTypes.string,
      jobTitle: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      educationFields: PropTypes.arrayOf(
        PropTypes.shape({
          school: PropTypes.string,
        })
      ).isRequired,
      workFields: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    setInputFields: PropTypes.func.isRequired,
  };
  const { editMode } = props;
  const { inputFields, setInputFields } = props;

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
