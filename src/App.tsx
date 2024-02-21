import './App.css'
import Button from './components/Atoms/Button'
import Label from './components/Atoms/Label'

function App() {
  return (
    <>
      <Button variant={"danger"} size={"md"}>등록하기</Button>
      <Button variant={"default"} size={"md"}>등록하기</Button>
      <Button variant={"success"} size={"md"}>등록하기</Button>
      <Button variant={"warning"} size={"md"}>등록하기</Button>
      <Label fontSize={"40px"} fontBold >안녕</Label>
      <Label fontSize={"100px"} fontBold>안녕</Label>
    </>
  )
}

export default App;
