import { createSerializer } from "@emotion/jest";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import DebounceInput from "./DebounceInput";

describe("Debounce Input Component", () => {
  it("renders with default props and styles", () => {
    let value = "";

    render(
      <DebounceInput
        data-testid="notr-debounce"
        value={value}
        onChange={(value) => (value = value)}
      />
    );
    const input = screen.getByTestId("notr-debounce");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle(`border: none`);
    expect(input).toHaveStyle(`outline: none`);

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    fireEvent.change(input, { target: { value: "Debounce Input" } });
    expect(input.value).toBe("Debounce Input");

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
  });

  it("renders with delay props and styles", () => {
    let value = "";
    vi.useFakeTimers();
    const mockFn = vi.fn();

    render(
      <DebounceInput
        data-testid="notr-debounce"
        value={""}
        onChange={mockFn}
        debounce={1000}
      />
    );
    const input = screen.getByTestId("notr-debounce");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle(`border: none`);
    expect(input).toHaveStyle(`outline: none`);
    fireEvent.change(input, { target: { value: "Debounce" } });
    fireEvent.change(input, { target: { value: "Debounce value" } });
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("Debounce value");
    expect(input.value).toBe("Debounce value");
    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    fireEvent.change(input, { target: { value: "Call again?" } });
    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith("Call again?");
  });
});
