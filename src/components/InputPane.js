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
      description: PropTypes.string,
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
    setInputFields: PropTypes.func.isRequired,
  };

  const { inputFields, setInputFields } = props;

  return (
    <div className="input-pane">
      <h1>Personal Details</h1>
      <InputCategory
        fields={[
          { name: "name", label: "Name" },
          { name: "jobTitle", label: "Job Title" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "website", label: "Website" },
          { name: "location", label: "Location" },
          { name: "description", label: "Description" },
        ]}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
      <h1>Education</h1>
      <InputCategory
        fields={[
          { name: "institution", label: "Institution" },
          { name: "course", label: "Course" },
          { name: "startYear", label: "Start Year" },
          { name: "endYear", label: "End Year" },
        ]}
        inputFields={inputFields}
        setInputFields={setInputFields}
        variableCount="educationFields"
      />
      <h1>Work Experience</h1>
      <InputCategory
        fields={[
          { name: "company", label: "Company" },
          { name: "position", label: "Position" },
          { name: "startYear", label: "Start Year" },
          { name: "endYear", label: "End Year" },
          { name: "description", label: "Description" },
        ]}
        inputFields={inputFields}
        setInputFields={setInputFields}
        variableCount="workFields"
      />
    </div>
  );
}

export default InputPane;
