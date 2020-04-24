import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fakeResumeData from "../components/fakeResumeData";
import ExperienceSection from "../components/ExperienceSection";
test("renders a experience component with job data", async () => {
  const { getByText } = render(
    <ExperienceSection config={fakeResumeData.experience} />
  );
  const foo = fakeResumeData.experience[0].jobDescription[0].text;
  const nameText = getByText(/`${foo}`/i);
  expect(nameText).toHaveTextContent(foo);
});
