import './App.css'
import Button from './components/Atoms/Button'
import Label from './components/Atoms/Label'
import {Text} from './components/Atoms/Text/Text';
import {Text as Title} from './components/Atoms/Text/Text';
import Vertical from './components/Atoms/VerticalBar/VerticalBar';
function App() {
  return (
    <>
      <Button variant={"danger"} size={"md"}>등록하기</Button>
      <Button variant={"default"} size={"md"}>등록하기</Button>
      <Button variant={"success"} size={"md"}>등록하기</Button>
      <Button variant={"warning"} size={"md"}>등록하기</Button>
      <Label fontSize={"40px"} fontBold >안녕</Label>
      <Label fontSize={"100px"} fontBold>안녕</Label>
      <Text fontSize="40px" fontBold>안녕</Text>
      <Text fontSize="50px" fontBold>안녕하세요</Text>
      <Title fontSize={50} fontBold>제목</Title>
      <Vertical color="#f83939"/>
    </>
  )
}

export default App;
