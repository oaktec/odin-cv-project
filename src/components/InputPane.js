import React from "react";
import PropTypes from "prop-types";

import InputCategory from "./InputCategory";

function InputPane(props) {
  InputPane.propTypes = {
    inputFields: PropTypes.shape({
      name: PropTypes.string,
      jobTitle: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      location: PropTypes.string,
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
    setInputFields: PropTypes.func.isRequired,
  };

  const { inputFields, setInputFields } = props;

  return (
    <div className="input-pane">
      <InputCategory
        category="Personal Details"
        fields={[
          { name: "name", label: "Name" },
          { name: "jobTitle", label: "Job Title" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "website", label: "Website" },
          { name: "location", label: "Location" },
        ]}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <InputCategory
        category="Education"
        fields={[{ name: "school", label: "School" }]}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <InputCategory
        category="Work Experience"
        fields={[{ name: "company", label: "Company" }]}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
    </div>
  );
}

export default InputPane;
