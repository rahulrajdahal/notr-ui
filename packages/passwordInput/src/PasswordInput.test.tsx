import { createSerializer } from "@emotion/jest";
import { colors } from "@rahulrajdahal/notr-core";
import { fireEvent, render, screen } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput Component", () => {
  it("renders with default props and styles", async () => {
    render(
      <PasswordInput
        data-testid="notr-password-input"
        label="Notr Password Input"
      />
    );
    let input = screen.getByTestId("notr-password-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(input).toHaveStyle(`--color-gray-400: ${colors.gray[400]}`);
    expect(input).toHaveStyle(`--color-gray-600: ${colors.gray[600]}`);
    expect(input).toHaveStyle(`--color-red-600: ${colors.red[600]}`);
    expect(input).toHaveStyle("display: flex");
    expect(input).toHaveStyle("flex-direction: column");
    expect(input).toHaveStyle("gap: 0.37rem");
    expect(input).toHaveStyle("align-items: start");
    expect(input).toHaveStyle("border: none");
    expect(input).toHaveStyle("outline: none");

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    expect(input.firstChild).toHaveStyle("display: flex");
    expect(input.firstChild).toHaveStyle("align-items: center");
    expect(input.firstChild).toHaveStyle("justify-content: space-between");
    expect(input.firstChild).toHaveStyle("gap: 1rem");
    expect(input.firstChild).toHaveStyle("width: 100%");

    expect(input.lastChild).toHaveStyle("display: flex");
    expect(input.lastChild).toHaveStyle("align-items: center");
    expect(input.lastChild).toHaveStyle("justify-content: center");
    expect(input.lastChild).toHaveStyle(
      "border: 1px solid var(--color-gray-600)"
    );
    expect(input.lastChild).toHaveStyle("padding: 0rem 0.5rem");
    expect(input.lastChild).toHaveStyle("outline: none");
    expect(input.lastChild).toHaveStyle("border-radius: 0.8125rem");
    expect(input.firstChild).toHaveStyle("width: 100%");

    input = screen.getByText("Notr Password Input");
    expect(input).toHaveStyle("font-size: 1rem");
    expect(input).toHaveStyle("font-weight: 500");
    expect(input).toHaveStyle("line-height: 1.25rem");
    expect(input).toHaveStyle("opacity: 0.77");
    expect(input).toHaveStyle("color: var(--color-gray-400)");

    render(
      <PasswordInput
        label="Notr Password Input"
        forgotPassword={{ href: "./forgot-password" }}
      />
    );
    input = screen.getByText("Forgot Password?");
    expect(input).toHaveStyle("font-size: 0.875rem");
    expect(input).toHaveStyle("color: var(--color-primary-600)");

    const placeholder = "Notr Password Input Placeholder";
    render(
      <PasswordInput label="Notr Password Input" inputProps={{ placeholder }} />
    );
    input = screen.getByPlaceholderText(placeholder);
    expect(input).toHaveStyle("width: 100%");
    expect(input).toHaveStyle("border: none");
    expect(input).toHaveStyle("outline: none");

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
  });

  it("renders with forgotPassword props and styles", async () => {
    render(
      <PasswordInput
        data-testid="notr-password-input"
        label="Notr Password Input"
      />
    );
    let input = screen.getByTestId("notr-password-input");
    expect(input).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    expect(input.firstChild).toHaveStyle("display: flex");
    expect(input.firstChild).toHaveStyle("align-items: center");
    expect(input.firstChild).toHaveStyle("justify-content: space-between");
    expect(input.firstChild).toHaveStyle("gap: 1rem");
    expect(input.firstChild).toHaveStyle("width: 100%");

    expect(input.lastChild).toHaveStyle("display: flex");
    expect(input.lastChild).toHaveStyle("align-items: center");
    expect(input.lastChild).toHaveStyle("justify-content: center");
    expect(input.lastChild).toHaveStyle(
      "border: 1px solid var(--color-gray-600)"
    );
    expect(input.lastChild).toHaveStyle("padding: 0rem 0.5rem");
    expect(input.lastChild).toHaveStyle("outline: none");
    expect(input.lastChild).toHaveStyle("border-radius: 0.8125rem");
    expect(input.firstChild).toHaveStyle("width: 100%");

    render(
      <PasswordInput
        label="Notr Password Input"
        forgotPassword={{ href: "./forgot-password" }}
      />
    );
    input = screen.getByText("Forgot Password?");
    expect(input).toHaveStyle("font-size: 0.875rem");
    expect(input).toHaveStyle("color: var(--color-primary-600)");
    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
  });

  it("should toggle input text type onf icon toggle", async () => {
    render(
      <PasswordInput
        data-testid="notr-password-input"
        label="Notr Password Input"
      />
    );
    let input = screen.getByTestId("notr-password-input");
    expect(input).toBeInTheDocument();

    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();

    expect(input.lastChild?.lastChild).toHaveStyle(
      "background-color: rgba(0,0,0,0)"
    );
    expect(input.lastChild?.lastChild).toHaveStyle("border: none");
    expect(input.lastChild?.lastChild).toHaveStyle("outline: none");
    expect(input.lastChild?.firstChild).toHaveProperty("type", "password");
    fireEvent.click(input.lastChild?.lastChild!);
    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
    expect(input.lastChild?.firstChild).toHaveProperty("type", "text");
    fireEvent.click(input.lastChild?.lastChild!);
    expect.addSnapshotSerializer(createSerializer());
    expect(input).toMatchSnapshot();
    expect(input.lastChild?.firstChild).toHaveProperty("type", "password");
  });
});
