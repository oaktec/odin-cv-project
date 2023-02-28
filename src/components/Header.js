import React from "react";

function Header() {
  return (
    <div className="header-container">
      <label htmlFor="edit_toggle" className="edit-toggle">
        <span className="edit-toggle-span">Edit Mode:</span>
        <input type="checkbox" id="edit_toggle" />
      </label>
      <h1>CV Project</h1>
    </div>
  );
}

export default Header;
