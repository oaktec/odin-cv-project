import React from "react";
import PropTypes from "prop-types";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function Content(props) {
  Content.propTypes = {
    editMode: PropTypes.bool.isRequired,
  };
  const { editMode } = props;
  return (
    <div className="content-container">
      {editMode && <InputPane />}
      <PreviewPane />
    </div>
  );
}

export default Content;
