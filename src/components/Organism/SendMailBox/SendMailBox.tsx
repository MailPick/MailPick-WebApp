import tw from "twin.macro";

const SendMailBox = () => {
  return(
    <Container>
      <input placeholder="email입력"/><br/>
      <input placeholder="제목입력"/>
    </Container>
  );
}

const Container = tw.div`
  pt-[30px]
`
export default SendMailBox;