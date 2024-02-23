import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags:["autodocs"],
  argTypes: {
    emailIconUrl: {
      control: "text",
    },
    email:{
      control:"text"
    }    
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NaverProfile: Story = {
  args: {
    email:"ex@naver.com",
    emailIconUrl:""
  },
};

export const GoogleProfile: Story = {
  args:{
    email:"ex@gmail.com",
    emailIconUrl:""
  }
}

export const DaumProfile: Story = {
  args:{
    email:"ex@daum.net",
    emailIconUrl:""
  }
}

export const ExPinterestProfile: Story = {
  args:{
    email:"",
    emailIconUrl:"https://w7.pngwing.com/pngs/197/755/png-transparent-pinterest-hd-logo-thumbnail.png"
  }
}
export const ExGptProfile: Story = {
  args:{
    email:"",
    emailIconUrl:"https://image.lawtimes.co.kr/images/187724.jpg"
  }
}