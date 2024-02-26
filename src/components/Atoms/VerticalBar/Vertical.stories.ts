import type { Meta, StoryObj } from '@storybook/react';
import VerticalBar from './VerticalBar';

const meta = {
  title: "Atoms/VerticalBar",
  component: VerticalBar,
  tags:["autodocs"],
  argTypes: {
    color:{control:"color"}
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof VerticalBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedBar: Story = {
  args:{
    color:"#FF0060"
  }
}

export const YellowBar: Story = {
  args: {
    color:"#F6FA70"
  },
};

export const GreenBar: Story = {
  args:{
    color: "#00DFA2"
  }
}

export const BlueBar : Story = {
  args:{
    color: "#0079FF"
  }
}

