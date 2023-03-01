import React from "react";
import PropTypes from "prop-types";

function PreviewPane(props) {
  PreviewPane.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string,
      jobTitle: PropTypes.string,
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
  };

  const { inputFields } = props;
  return (
    <div className="preview-pane">
      <div className="preview-pane__header">
        <div className="preview-pane__name">{inputFields.name}</div>
        <div className="preview-pane__job-title">{inputFields.jobTitle}</div>
      </div>
    </div>
  );
}

export default PreviewPane;
