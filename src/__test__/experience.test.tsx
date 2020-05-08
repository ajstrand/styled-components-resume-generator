import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fakeResumeData from "../components/fakeResumeData";
import ExperienceSection from "../components/ExperienceSection";
test("renders a experience component with job data", async () => {
  const { getAllByText } = render(
    <ExperienceSection config={fakeResumeData.experience} />
  );
  const completeText = fakeResumeData.experience[0].jobDescription[0].text;
  const qwerty = completeText.substring(0, 5);
  const regex = new RegExp(`${qwerty}`, "i");

  const elementsThatMatch = getAllByText(regex);

  if (Array.isArray(elementsThatMatch)) {
    elementsThatMatch.forEach((el) => expect(el).toHaveTextContent(regex));
  } else {
    expect(elementsThatMatch).toHaveTextContent(completeText);
  }
});
