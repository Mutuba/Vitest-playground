import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import "@testing-library/jest-dom";
import { MyButton } from "../../components/MyButton";

describe("MyButton", () => {
  it("should render the button)", () => {
    render(<MyButton />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });
});
