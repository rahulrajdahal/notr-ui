import Input from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: "Notr Input",
  },
};

export const InputWithErrors = {
  args: {
    label: "Notr Error Input",
    errors: ["Invalid Input"],
  },
};
