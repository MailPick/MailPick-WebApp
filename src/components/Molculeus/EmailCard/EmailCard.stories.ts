import type { Meta, StoryObj } from '@storybook/react';
import EmailCard from './EmailCard';

const meta = {
  title: "Blocks/EmailCard",
  component: EmailCard,
  tags:["autodocs"],
  argTypes: {
    name:{control:"text",description:"유저 닉네임"},
    title:{control:"text",description:"메일 제목"},
    content:{control:"text", description:"메일 내용"},
    email:{control:"text",description:"보낸 사용자의 메일주소"},
    emailIconUrl:{control:"text", description:"보낸 사용자의 프로필"},
    verticalColor:{control:"color", description:"수직 바 색"},
  },
  parameters: {
    layout: "centered",
  },
}satisfies Meta<typeof EmailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NaverEmail: Story = {
  args:{
    name:"PHW",
    title:"[중요] 2월 5일 개발 프로젝트 회의 안내",
    content:`안녕하세요, 은서님, 우선, 귀하의 노고에 진심으로 감사드립니다.
      프로젝트 회의를 개최하려고 합니다. 회의에 관한 세부사항은 아래와 같습니다..
    `,
    email:"phw@naver.com",
    verticalColor:"#3469CF",
    time:"12:34pm"
  }
}

