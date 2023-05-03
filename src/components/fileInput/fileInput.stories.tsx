import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FileInput } from ".";

const meta: Meta<typeof FileInput> = {
  title: "FileInput",
  component: FileInput,
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    text: "Upload Image",
  },
};
