import './App.css'
import EmailCard from './components/Blocks/EmailCard/EmailCard';
function App() {
  return (
    <>
      <EmailCard 
        name="PHW" 
        title="[중요] 2월 5일 개발 프로젝트 회의 안내" 
        content={`안녕하세요, 은서님, 우선, 귀하의 노고에 진심으로 감사드립니다.
        저희 메일픽의 중요한 다음 단계를 논의하기 위해 개발 프로젝트 회의를 개최하려고 합니다. 회의에 관한 세부 사항은 아래와 같습니다.
        `}
        verticalColor="#ff8484"
        email="phw@gmail.com"
        time="12:34pm"
      />
    </>
  )
}

export default App;
