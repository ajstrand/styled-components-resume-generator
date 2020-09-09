import React from "react";
import Theme from "./Theme";
import ResumeContent from "./ResumeContent";
import resumeDataObj from "./defaultResumeDataTemplate";
const App = (): JSX.Element => (
  <Theme>
    <ResumeContent config={resumeDataObj} />
  </Theme>
);

export default App;
