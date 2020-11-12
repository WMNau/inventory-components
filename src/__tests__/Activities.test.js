import { jssPreset } from "@material-ui/core";
import { render, screen, cleanup, waitFor, act } from "@testing-library/react";

import Activity from "../views/Activities";

beforeAll(() => jest.spyOn(window, "fetch"));

afterEach(cleanup);

describe("Activities", () => {
  test("fetch data from API and display data", async () => {
    const data = [
      {
        name: "reptar",
        date: "11/11/2020",
        description: "Lorem ipsum"
      }
    ];

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data
    });

    render(<Activity />);
  });
});
