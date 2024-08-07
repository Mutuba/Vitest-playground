import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../../components/Accordion";
describe("Accordion test", () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>
    );
  });
  test("Should show title", () => {
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/Content/i)).toBeNull();
  });

  test("should show the content on accordion click", async () => {
    const title = screen.getByText(/Show/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Content/i)).toBeInTheDocument();
  });
});
