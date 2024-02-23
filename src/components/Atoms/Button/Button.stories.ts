import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags:["autodocs"],
  argTypes: {
    variant: {
      control: 'select',
      options: ["default","primary","success","warning","danger"], 
    },
    size:{
      control:"select",
      options:["sm","md","lg"]
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    variant:"default",
    size: "md",
    children: "Button"
  },
};

export const Primary: Story = {
  args: {
    variant:"primary",
    size: "md",
    children: "Button"
  },
};

export const Success: Story = {
  args: {
    variant:"success",
    size: "md",
    children: "Button"
  },
};
export const Warning: Story = {
  args: {
    variant:"warning",
    size: "md",
    children: "Button"
  },
};
export const Danger: Story = {
  args: {
    variant:"danger",
    size: "md",
    children: "Button"
  },
};
