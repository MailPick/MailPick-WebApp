import type { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags:["autodocs"],
  argTypes: {
    fontSize:{
      control:"text"
    },
    fontWeight:{
      control:"select",
      options:["light","medium","bold"]
    },
    color:{
      control:"color"
    }
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleText: Story = {
  args:{
    children:"ExampleText",
    fontSize:"30px",
    fontWeight:"medium",
    color:"#000000"
  }
}
