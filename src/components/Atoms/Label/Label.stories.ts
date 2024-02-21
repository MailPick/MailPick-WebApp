import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: "Components/Label",
  component: Label,
  tags:["autodocs"],
  argTypes: {
    fontSize: {
      control: 'select',
      options: ['sm', 'md', 'lg', '32px', '8rem', '16em'], 
    },
    fontBold: {
      control: 'boolean',
    },
    tagType: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    fontSize: "md",
    children: "Example Text",
    fontBold: false,
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    fontBold: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    fontSize: "sm",
  },
};
