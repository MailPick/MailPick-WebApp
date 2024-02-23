import './App.css'
import Avatar from './components/Atoms/Avatar';
import Button from './components/Atoms/Button'
import Label from './components/Atoms/Label'

const exampleProfile = "https://i.ibb.co/KVVtbHS/2024-02-23-11-37-52.png";
function App() {
  return (
    <>
      <Button variant={"danger"} size={"md"}>등록하기</Button>
      <Button variant={"default"} size={"md"}>등록하기</Button>
      <Button variant={"success"} size={"md"}>등록하기</Button>
      <Button variant={"warning"} size={"md"}>등록하기</Button>
      <Label fontSize={"40px"} fontBold >안녕</Label>
      <Label fontSize={"100px"} fontBold>안녕</Label>
      <Avatar imageUrl={exampleProfile} email={"hrewrw@naver.com"}/>
      <Avatar imageUrl="" email={""}/>
    </>
  )
}

export default App;
