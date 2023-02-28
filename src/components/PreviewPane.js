import React from "react";
import PropTypes from "prop-types";

function PreviewPane(props) {
  PreviewPane.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      educationFields: PropTypes.arrayOf(
        PropTypes.shape({
          school: PropTypes.string.isRequired,
        })
      ).isRequired,
      workFields: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  const { inputFields } = props;

  return (
    <div className="preview-pane">
      <div className="preview-pane__header">
        <h1 className="preview-pane__name">{inputFields.name}</h1>
        <h2 className="preview-pane__title">{inputFields.jobTitle}</h2>
      </div>
    </div>
  );
}

export default PreviewPane;
