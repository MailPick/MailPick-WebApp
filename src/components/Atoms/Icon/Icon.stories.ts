import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { IconId } from './Icon';

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags:["autodocs"],
  argTypes: {
    id: {
      control: "select",
      options: Object.values(IconId), 
    },
    width:{
      control:"text"
    },
    height:{
      control:"text"
    },
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BiInboxIcon: Story = {
  args: {
    id:"biInbox",
    width:"60px",
    height:"60px"
  },
};

export const ListIcon: Story ={
  args:{
    id:"hamburger",
    width:"60px",
    height:"60px"
  }
}
export const List1Icon: Story ={
  args:{
    id:"list1",
    width:"60px",
    height:"60px"
  }
}
export const List2Icon: Story ={
  args:{
    id:"list2",
    width:"60px",
    height:"60px"
  }
}
export const PaperPlaneTiltIcon: Story ={
  args:{
    id:"paperPlaneTilt",
    width:"60px",
    height:"60px"
  }
}
export const PushPinIcon: Story ={
  args:{
    id:"pushPin",
    width:"60px",
    height:"60px"
  }
}
export const TrashIcon: Story ={
  args:{
    id:"trash",
    width:"60px",
    height:"60px"
  }
}
