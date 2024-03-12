import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const iconList=[
  "biInbox",
  "file",
  "hamburger",
  "list1",
  "list2",
  "paperPlaneTilt",
  "pushPin",
  "trash",
  "user",
  "naver",
  "google",
  "daum"
] as const

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
  tags:["autodocs"],
  argTypes: {
    id:{constrol:"select",description:"아이콘 아이디",options:iconList},
    width:{control:"text",description:"아이콘 너비"},
    height:{control:"text",description:"아이콘 높이"},
    onClick:{action:"clicked",description:"아이콘 클릭시 이벤트"},
    isActive:{control:"boolean",description:"활성화 여부"},
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotActive: Story = {
  args:{
    id:"biInbox",
    width:"24px",
    height:"24px",
    onClick:()=>{},
    isActive:false
  }
}

export const IsActive: Story = {
  args:{
    id:"biInbox",
    width:"24px",
    height:"24px",
    onClick:()=>{},
    isActive:true
  }
}
