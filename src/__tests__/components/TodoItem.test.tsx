import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoItem from "../../components/TodoItem";

describe("TodoItem", () => {
  it("displays the todo and reacts to the checkbox toggle", async () => {
    const mockToggle = vi.fn();
    const todo = { id: 1, text: "Learn Vitest", completed: false };

    render(<TodoItem todo={todo} onToggle={mockToggle} />);

    expect(screen.getByText("Learn Vitest")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});
