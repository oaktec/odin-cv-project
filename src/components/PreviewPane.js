import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function PreviewPane(props) {
  PreviewPane.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string,
      jobTitle: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      location: PropTypes.string,
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
        <div className="preview-pane__side-group">
          <div className="preview-pane__email">
            {`${inputFields.email} `}
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="preview-pane__phone">
            {`${inputFields.phone} `}
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="preview-pane__website">
            {`${inputFields.website} `}
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="preview-pane__location">
            {`${inputFields.location} `}
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPane;
