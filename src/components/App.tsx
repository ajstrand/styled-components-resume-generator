import React from "react";
import Theme from "./Theme";
import ResumeContent from "./ResumeContent";
import defaultResumeDataObj from "./defaultResumeDataTemplate";
import PropTypes, { string } from "prop-types";

const App = ({ resumeDataObj }): JSX.Element => (
  <Theme>
    <ResumeContent
      config={resumeDataObj ? resumeDataObj : defaultResumeDataObj}
    />
  </Theme>
);

App.propTypes = {
  resumeDataObj: PropTypes.shape({
    header: PropTypes.shape({
      name: PropTypes.string.isRequired,
      site: PropTypes.string,
      emailLinkValue: PropTypes.string.isRequired,
      emailLabel: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
    //TODO: support various education types in props
    education: PropTypes.arrayOf(
      PropTypes.shape({
        schoolName: PropTypes.string,
        dateRange: PropTypes.string,
        degreeTitle: PropTypes.string,
        degreeDescription: PropTypes.string,
      })
    ),
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        dateRange: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobDescription: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
          })
        ),
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        dateRange: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
      })
    ),
    skills: PropTypes.arrayOf(string),
  }),
};

export default App;
