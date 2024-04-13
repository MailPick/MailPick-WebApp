import Text from "@/components/Atoms/Text";
import IconButton from "@/components/Atoms/IconButton";
import { Container } from "@/components/Organism/ViewEmailList/styled"
import tw, { styled } from "twin.macro"
import { useActiveEmailStore } from "@/store/activeEmailStore";
import usePostRequest from "@/hooks/usePostRequest";
import Spinner from "@/components/Atoms/Spinner";
import { useEffect} from "react";
interface DataParams{
  plain:string | undefined;
}
const EmailScheduleSummary = () => {
  const { activeEmail } = useActiveEmailStore();
  const {mutate,isPending, isSuccess} = usePostRequest<DataParams>();
  useEffect(()=>{
  },[activeEmail])

  const handleEmailAnalysis = () => {
    if(activeEmail && activeEmail.body.plain){
      mutate({endpoint:"/gpt",data:{plain:activeEmail.body.plain}});
    }
  }
  return (
    <>
      {
        !isSuccess && !isPending && (
          <>
          <ScheduleContainer>
            <Text fontSize="14px" fontWeight="bold">메일 요약, 일정 추출 해드릴까요?</Text>
            <ArrowIconBtn id="arrow" onClick={handleEmailAnalysis}/>
            {(isPending) && (
              <SpinnerBox><Spinner/></SpinnerBox>
            )}
            </ScheduleContainer>
          </>
        )
      }
      {
        isSuccess ?(
          <>
          <ScheduleContainer>
            <div>
            <Text fontSize="14px" fontWeight="bold">2월 5일 개발 프로젝트 회의 안내</Text>
            <Text fontSize="12px" fontWeight="medium" color="#727272">2024.02.05 10:00 ~ 12:00</Text>
            </div>
            <PlusIconBtn id="plus"/>          
          </ScheduleContainer>
          <EmailSummaryContainer>
            <Text fontSize="14px" fontWeight="bold">메일요약</Text>
            <Text fontSize="12px" fontWeight="regular">2024년 2월 5일 오전 10시부터 서울 삼모타워 5층에서
메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.d메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.
메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.d메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.
메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.d메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.
메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.d메일린 개발 프로젝트 회의가 열립니다. 주요 안건은 현재 개발 상황 점검, 새 기능 논의, 향후 계획 설정입니다. 참석해 의견을 나눠주시길 요청합니다.
            </Text>
          </EmailSummaryContainer>
          </>
        ):null
      }
    </>
  );
};

export default EmailScheduleSummary;



const ScheduleContainer = tw(Container)`
  flex
  flex-row
  items-center
  justify-between
  pl-[24px]
  pr-[15px]
  py-[20px]
  w-full
  h-[80px]
  rounded-[14px]
`

const EmailSummaryContainer = styled(ScheduleContainer)`
  ${
  tw`flex
  flex-col
  items-start
  justify-start
  px-[24px]
  py-[20px]
  gap-[4px]
  min-h-[120px]
  grow
  overflow-y-auto` 
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 10px; 
  }
`

const ArrowIconBtn = tw(IconButton)`
  w-[32px] h-[32px] rounded-full bg-[#D4E7FF] cursor-pointer
  [> svg]:(w-[16px] h-[16px] [color:#2A86FF])
`

const PlusIconBtn = tw(IconButton)`
  w-[32px] h-[32px] rounded-full bg-[#D4E7FF] cursor-pointer
  [> svg]:(w-[16px] h-[16px] [color:#2A86FF])
`
const SpinnerBox = tw.div`bg-[#D4E7FF] w-[40px] h-[40px] rounded-full flex items-center justify-center select-none`