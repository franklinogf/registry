import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InputField } from "@/registry/new-york/inputs/input-field";

const meta = {
  title: "Inputs/InputField",
  component: InputField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    error: "",
    fieldClassName: "",
    errorOnTop: false,
  },
};

export const Error: Story = {
  args: {
    label: "Name",
    error: "Name is required",
    fieldClassName: "",
    errorOnTop: false
  }
};

export const ErrorOnTop: Story = {
  args: {
    label: "Name",
    error: "Name can't be empty",
    fieldClassName: "",
    errorOnTop: true
  }
};
