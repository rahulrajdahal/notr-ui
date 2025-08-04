import PasswordInput from "./PasswordInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: "Notr Password Input",
  },
};

export const InputWithForgotPassword = {
  args: {
    label: "Notr Password Input",
    forgotPassword: { href: "./forgot-password" },
  },
};
