import { createSerializer } from "@emotion/jest";
import { CheckSquare } from "@meistericons/react";
import { colors } from "@rahulrajdahal/notr-core";
import { render, screen } from "@testing-library/react";
import Pill from "./Pill";

describe("Button Component", () => {
  it("renders with default props and styles", () => {
    render(<Pill data-testid="notr-pill" text="Completed" count={3} />);
    const button = screen.getByTestId("notr-pill");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--color-green-600: ${colors.green[600]}`);
    expect(button).toHaveStyle(`--color-green-400: ${colors.green[400]}`);
    expect(button).toHaveStyle(`background-color: ${colors.green[400]}`);
    expect(button).toHaveStyle(`color: ${colors.green[600]}`);
    expect(button).toHaveStyle("display: flex");
    expect(button).toHaveStyle("height: 2.5rem");
    expect(button).toHaveStyle("border-radius: 0.75rem");
    expect(button).toHaveStyle("max-width: 10.25rem");
    expect(button).toHaveStyle("align-items: center");
    expect(button).toHaveStyle("justify-content: center");
    expect(button).toHaveStyle("font-weight: 500");
    expect(button).toHaveStyle("padding: 0 0.25rem");
    expect(button).toHaveStyle("gap: 0.44rem");
    expect(button).toHaveStyle("font-size: 0.875rem");
    expect(button).toHaveStyle("line-height: 0.875rem");

    expect(button.innerHTML).toBe(" 3 tasks Completed");

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();
  });

  it("renders with icon props and styles", () => {
    render(
      <Pill
        data-testid="notr-pill"
        icon={<CheckSquare />}
        text="Completed"
        count={3}
      />
    );
    const button = screen.getByTestId("notr-pill");
    expect(button).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();
  });
});
