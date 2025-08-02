import { createSerializer } from "@emotion/jest";
import { colors } from "@rahulrajdahal/notr-core";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders with default props and styles", () => {
    // const user = userEvent.setup();

    render(<Button>Notr Button</Button>);
    const button = screen.getByRole("button", { name: /notr button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(button).toHaveStyle(`--color-gray-400: ${colors.gray[400]}`);
    expect(button).toHaveStyle(`background-color: ${colors.primary[600]}`);
    expect(button).toHaveStyle("padding: 1.31rem");
    expect(button).toHaveStyle("color: #ffffff");
    expect(button).toHaveStyle("border-radius: 0.8125rem");
    expect(button).toHaveStyle("font-weight: 700");
    expect(button).toHaveStyle("cursor: default");

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();

    // await user.hover(button);
    // expect(button).toHaveStyle("cursor: pointer");
  });

  it("renders fill variant styles", () => {
    render(<Button variant="fill">Notr Button Filled</Button>);
    const button = screen.getByRole("button", {
      name: /notr button filled/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(button).toHaveStyle(`background-color: ${colors.primary[600]}`);
    expect(button).toHaveStyle("color: #ffffff");
    expect(button).toHaveStyle("font-weight: 700");
    expect(button).toHaveStyle("padding: 1.31rem");
    expect(button).toHaveStyle("border-radius: 0.8125rem");

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();
  });

  it("renders outline variant styles", () => {
    render(<Button variant="outline">Notr Button Outline</Button>);
    let button = screen.getByRole("button", {
      name: /notr button outline/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(button).toHaveStyle(`color: ${colors.primary[600]}`);
    expect(button).toHaveStyle("border: 1px solid var(--color-primary-600)");
    expect(button).toHaveStyle("font-weight: 700");
    expect(button).toHaveStyle("padding: 1.31rem");
    expect(button).toHaveStyle("border-radius: 0.8125rem");

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();

    render(
      <Button variant="outline" disabled={true}>
        Notr Button Outline Disabled
      </Button>
    );

    button = screen.getByRole("button", {
      name: /notr button outline disabled/i,
    });
    expect(button).toHaveStyle("border-color: var(--color-gray-400)");
  });

  it("renders text variant styles", () => {
    render(<Button variant="text">Notr Button Text</Button>);
    let button = screen.getByRole("button", {
      name: /notr button text/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`--color-primary-600: ${colors.primary[600]}`);
    expect(button).toHaveStyle(`color: ${colors.primary[600]}`);
    expect(button).toHaveStyle("font-weight: 700");

    expect.addSnapshotSerializer(createSerializer());
    expect(button).toMatchSnapshot();
  });

  it("renders with disabled props and styles", () => {
    render(<Button disabled>Notr Button Disabled</Button>);
    const button = screen.getByRole("button", {
      name: /notr button disabled/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: var(--color-gray-400)`);
    expect(button).toHaveStyle("cursor:not-allowed");
    expect(button).toHaveStyle("font-weight: 500");
  });
});
