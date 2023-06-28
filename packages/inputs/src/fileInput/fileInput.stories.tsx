import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileInput } from '.'

const meta: Meta<typeof FileInput> = {
  title: 'FileInput',
  component: FileInput,
}

export default meta

type Story = StoryObj<typeof FileInput>
const setImageData = (data: React.SetStateAction<string>) => {
  console.log('setImageData mock:', data);
};

let updateData = false;

const setUpdateData = (data: React.SetStateAction<string>) => {
  updateData = true
};

export const Primary: Story = {
  args: {
    text: 'Upload Image',
    data: '',
    setData: setImageData,
    allowedExtensions: [".jpg", ".jpeg", ".png"],
    fileType: "image",
  },
}
