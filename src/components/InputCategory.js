import React from "react";
import PropTypes from "prop-types";

function InputCategory(props) {
  InputCategory.propTypes = {
    category: PropTypes.string.isRequired,
  };
  const { category } = props;
  return (
    <div className="input-category">
      <h1>{category}</h1>
    </div>
  );
}

export default InputCategory;
