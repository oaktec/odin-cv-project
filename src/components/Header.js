import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  Header.propTypes = {
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
    toggleEditMode: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
    setInputFields: PropTypes.func.isRequired,
  };

  const { editMode, toggleEditMode } = props;
  const { setInputFields } = props;

  const exampleInfo = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    email: "john.doe@email.com",
    phone: "01234 567890",
    website: "www.johndoe.com",
    location: "Bristol, UK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Consectetur libero id faucibus nisl.",
    educationFields: [
      {
        institution: "The Odin Project",
        course: "Full Stack JavaScript",
        startYear: "2023",
        endYear: "now",
      },
      {
        institution: "University of the West of England",
        course: "BSc Computer Science",
        startYear: "2019",
        endYear: "2022",
      },
      {
        institution: "University of the West of England",
        course: "Foundation Degree in Computing",
        startYear: "2017",
        endYear: "2019",
      },
    ],
    workFields: [
      {
        company: "The Odin Project",
        position: "Full Stack JavaScript Tutor",
        startYear: "2023",
        endYear: "2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue. Porttitor eget dolor morbi non.",
      },
      {
        company: "Software Company",
        position: "Software Engineer",
        startYear: "2024",
        endYear: "2029",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
      },
    ],
  };

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
      <button type="button" onClick={() => setInputFields(exampleInfo)}>
        Populate fields with example info
      </button>
      <h1>CV Project</h1>
    </div>
  );
}

export default Header;
