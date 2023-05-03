import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArkitemaButton } from ".";

const meta: Meta<typeof ArkitemaButton> = {
  title: "ArkitemaButton",
  component: ArkitemaButton,
};

export default meta;

type Story = StoryObj<typeof ArkitemaButton>;

export const Primary: Story = {
  args: {
    text: "Button text",
    onclick: () => {
      console.log("clicked");
    },
  },
};
