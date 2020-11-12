import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);

    const navHeaderText = screen.queryByText("Taking Inventory");
    expect(navHeaderText).not.toBeNull();
  });
});
