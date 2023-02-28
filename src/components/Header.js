import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  Header.propTypes = {
    toggleEditMode: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
  };

  const { editMode, toggleEditMode } = props;
  return (
    <div className="header-container">
      <label htmlFor="edit_toggle" className="edit-toggle">
        <span className="edit-toggle-span">Edit Mode:</span>
        <input
          onChange={() => toggleEditMode()}
          type="checkbox"
          checked={editMode}
          id="edit_toggle"
        />
      </label>
      <h1>CV Project</h1>
    </div>
  );
}

export default Header;
