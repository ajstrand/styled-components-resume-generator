import React from "react";
import Theme from "./Theme";
import ResumeContent from "./ResumeContent";
import testResumeData from "./testResumeData";
const App = (): JSX.Element => (
  <Theme>
    <ResumeContent config={testResumeData} />
  </Theme>
);

export default App;
