import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function InputCategory(props) {
  InputCategory.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
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
          company: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    setInputFields: PropTypes.func.isRequired,
    variableCount: PropTypes.string,
  };
  const { fields, inputFields, setInputFields, variableCount } = props;
  let element;
  if (variableCount) {
    element = (
      <div className="variable-input-categories">
        {inputFields[variableCount].map((_, index) => (
          <div className="input-category">
            <ul className="category-list">
              {fields.map((field) => (
                // eslint-disable-next-line react/no-array-index-key
                <label htmlFor={field.name} key={`${index}${field.name}`}>
                  {field.label}
                  <input
                    type="text"
                    onChange={(e) => {
                      const arr = inputFields[variableCount];
                      inputFields[variableCount][index][field.name] =
                        e.target.value;
                      setInputFields({
                        ...inputFields,
                        [variableCount]: arr,
                      });
                    }}
                    value={inputFields[variableCount][field.name]}
                  />
                </label>
              ))}
            </ul>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                const arr = inputFields[variableCount];
                arr.splice(index, 1);
                setInputFields({
                  ...inputFields,
                  [variableCount]: arr,
                });
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setInputFields({
              ...inputFields,
              [variableCount]: inputFields[variableCount].concat([{}]),
            });
          }}
        >
          Add
        </button>
      </div>
    );
  } else {
    element = (
      <div className="input-category">
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
  return element;
}

export default InputCategory;
