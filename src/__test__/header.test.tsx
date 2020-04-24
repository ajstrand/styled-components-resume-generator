import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fakeResumeData from "../components/fakeResumeData";
import Header from "../components/Header";
test("renders a header component with the user's name", async () => {
  const { getByText } = render(<Header config={fakeResumeData.header} />);
  const nameText = getByText(/First Last/i);
  expect(nameText).toHaveTextContent(fakeResumeData.header.name);
});
