import React from "react";
import PropTypes from "prop-types";

function InputCategory(props) {
  InputCategory.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
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
    category: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    setInputFields: PropTypes.func.isRequired,
  };
  const { category, fields, inputFields, setInputFields } = props;
  return (
    <div className="input-category">
      <h1>{category}</h1>
      <ul className="category-list">
        {fields.map((field) => (
          <label htmlFor={field.name} key={field.name}>
            {field.label}
            <input
              type="text"
              onChange={(e) => {
                setInputFields({
                  ...inputFields,
                  [field.name]: e.target.value,
                });
              }}
              value={inputFields[field.name]}
            />
          </label>
        ))}
      </ul>
    </div>
  );
}

export default InputCategory;
