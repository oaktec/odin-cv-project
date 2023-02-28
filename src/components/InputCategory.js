import React from "react";
import PropTypes from "prop-types";

function InputCategory(props) {
  InputCategory.propTypes = {
    category: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  const { category, fields } = props;
  return (
    <div className="input-category">
      <h1>{category}</h1>
      <ul>
        {fields.map((field) => (
          <li key={field.name}>{field.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputCategory;
