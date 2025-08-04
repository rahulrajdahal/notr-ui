import { createSerializer } from "@emotion/jest";
import { colors } from "@rahulrajdahal/notr-core";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders with default props and styles", async () => {
    render(<Input data-testid="notr-input" label="Notr Input" />);
    let input = screen.getByTestId("notr-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(input).toHaveStyle(`--color-gray-400: ${colors.gray[400]}`);
    expect(input).toHaveStyle(`--color-gray-600: ${colors.gray[600]}`);
    expect(input).toHaveStyle(`--color-red-600: ${colors.red[600]}`);
    expect(input).toHaveStyle("display: flex");
    expect(input).toHaveStyle("flex-direction: column");
    expect(input).toHaveStyle("gap: 0.37rem");

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    input = screen.getByText("Notr Input");
    expect(input).toHaveStyle("font-size: 1rem");
    expect(input).toHaveStyle("font-weight: 500");
    expect(input).toHaveStyle("line-height: 1.25rem");
    expect(input).toHaveStyle("opacity: 0.77");
    expect(input).toHaveStyle("color: var(--color-gray-300)");

    const placeholder = "Notr Input Placeholder";
    render(<Input label="Notr Input" inputProps={{ placeholder }} />);
    input = screen.getByPlaceholderText(placeholder);
    expect(input).toHaveStyle("height: 3.75rem");
    expect(input).toHaveStyle("border-radius: 0.8125rem");
    expect(input).toHaveStyle("border: 1px solid var(--color-gray-600)");
    expect(input).toHaveStyle("padding: 0 0.5rem");
    expect(input).toHaveStyle("outline: none");

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
  });

  it("renders with errors props and styles", async () => {
    const errors = ["Invalid Input"];
    render(
      <Input data-testid="notr-input" label="Notr Input" errors={errors} />
    );
    let input = screen.getByTestId("notr-input");
    expect(input).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    input = screen.getByText("Invalid Input");
    expect(input).toHaveStyle("font-size: 0.875rem");
    expect(input).toHaveStyle("color: var(--color-red-600)");
    expect(input).toHaveStyle("font-style: italic");
  });

  it("renders labelProps and styles", async () => {
    render(
      <Input
        data-testid="notr-input"
        label="Notr Input"
        labelProps={{ title: "Notr Input" }}
      />
    );
    let input = screen.getByTestId("notr-input");
    expect(input).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    input = screen.getByText("Notr Input");
    expect(input).toHaveProperty("title", "Notr Input");
    expect(input).toHaveStyle("font-size: 1rem");
    expect(input).toHaveStyle("font-weight: 500");
    expect(input).toHaveStyle("line-height: 1.25rem");
    expect(input).toHaveStyle("opacity: 0.77");
    expect(input).toHaveStyle("color: var(--color-gray-300)");
  });

  it("renders inputProps and styles", async () => {
    const placeholder = "Notr Input";

    render(
      <Input
        data-testid="notr-input"
        label="Notr Input"
        inputProps={{ name: "notr", placeholder }}
      />
    );
    let input = screen.getByTestId("notr-input");
    expect(input).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    input = screen.getByPlaceholderText("Notr Input");
    expect(input).toHaveProperty("name", "notr");
    expect(input).toHaveProperty("placeholder", placeholder);
    expect(input).toHaveStyle("height: 3.75rem");
    expect(input).toHaveStyle("border-radius: 0.8125rem");
    expect(input).toHaveStyle("border: 1px solid var(--color-gray-600)");
    expect(input).toHaveStyle("padding: 0 0.5rem");
    expect(input).toHaveStyle("outline: none");
  });
});
