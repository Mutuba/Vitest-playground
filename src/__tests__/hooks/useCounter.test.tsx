import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  it("should use counter", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });

  it("should accept initial count", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });
});
