/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
//import Theme from "./Theme";
import ResumeContent from "./ResumeContent";
import defaultResumeDataObj from "./defaultResumeDataTemplate";
import PropTypes, { string } from "prop-types";

const StyledResume = (props: { config: any }): JSX.Element => {
  const { config } = props;
  const [data, setData] = useState(defaultResumeDataObj);
  useEffect(() => {
    setData(config ? config : defaultResumeDataObj);
  }, []);

  return (
    // <Theme>
    <ResumeContent config={data} />
    // </Theme>
  );
};

StyledResume.propTypes = {
  config: PropTypes.shape({
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
        college: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string,
        }),
        bootcamp: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string,
        }),
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

export default StyledResume;
