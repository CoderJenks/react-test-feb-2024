import { screen, render } from "@testing-library/react"
import NavBar from "../../components/navBar/NavBar";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../api/menuApi")

describe("Nav Bar", () => {
  test("Renders links to Main Page and Checkout page", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("link")).toContain(screen.getByText("Home"));
    expect(screen.getAllByRole("link")).toContain(screen.getByText("Checkout"));
    
  });
})