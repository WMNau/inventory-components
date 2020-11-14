import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Activity from "../views/Activities";

beforeAll(() => jest.spyOn(window, "fetch"));

afterEach(cleanup);

describe("Activities", () => {
  test("fetch data from API and display data", async () => {
    const data = [
      { name: "reptar", date: "11/11/2020", description: "Lorem ipsum" }
    ];

    const mockReq = window.fetch.mockResolvedValue({
      json: () => ({
        data: data
      })
    });

    mockReq();

    render(<Activity />);

    const renderData = await waitFor(() =>
      screen.getByText("Date: 11/11/2020")
    );

    expect(renderData).toBeInTheDocument();
  });
});
