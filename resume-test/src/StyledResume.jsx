/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import ResumeContent from "./components/ResumeContent.jsx";
import defaultResumeDataObj from "./components/defaultResumeDataTemplate";
import PropTypes, { string } from "prop-types";
import { ThemeProvider, useTheme } from './components/Theme';

const StyledResume = (props) => {
  const { config } = props;
  const theme = useTheme()

  const [data, setData] = useState(defaultResumeDataObj);
  useEffect(() => {
    setData(config ? config : defaultResumeDataObj);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <ResumeContent config={data} userColors={theme.userColors} />
    </ThemeProvider>
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
