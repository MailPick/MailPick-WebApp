import { useState } from "react";
import {format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek,addDays,isSameMonth,isSameDay} from 'date-fns'
import Text from "../Text";
import {CalendarContainer, Header, YearWithArrow, ArrowArea, PlusWithExpansion, DayOfTheWeek, Body, Week, DatesText, Year, RightArrowIconBtn, LeftArrowIconBtn, PlusIconBtn, ExpansionIconBtn, DateCell, InnerCircle, Dot} from "./styled";
const DaysGrid = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  for(let i=0; i<7; i++){
    days.push(
        <DatesText fontSize="14px" fontWeight="bold">
          {date[i]}
        </DatesText>
    )
  }
  return <DayOfTheWeek>{days}</DayOfTheWeek>
}
interface DateCellsProps{
  currentMonth:Date;
  selectedDate:Date;
  onDateClick:(day:Date)=>void;
}

const DateCells = ({currentMonth,selectedDate, onDateClick}:DateCellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd)
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while(day <= endDate){
    for(let i=0; i<7; i++){
      formattedDate = format(day, "d");
      const cloneDay = day;
      const isSunday = day.getDay() === 0;
      days.push(
        <DateCell
          key={day.toISOString()}
          onClick={()=>onDateClick(cloneDay)}
          $isNotValid={format(currentMonth, 'M') !== format(day, 'M')} 
          $isSunday={isSunday}
        >
          <InnerCircle
            $isDisabled={!isSameMonth(day, monthStart)}
            $isSelected={isSameDay(day, selectedDate)}
            $isNotValid={format(currentMonth, 'M') !== format(day, 'M')} 
            $isValid={!(format(currentMonth, 'M') !== format(day, 'M') || !isSameMonth(day, monthStart))}
          >
            <Text fontSize="16px" fontWeight="medium">
              {formattedDate}
            </Text>
            {
              isSameDay(day, selectedDate) && <Dot/>
            }
          </InnerCircle>
        </DateCell>
      )
      day = addDays(day, 1);
    }
    rows.push(
      <Week key={day.toISOString()}>
        {days}
      </Week>
    )
    days = [];
  }
  return <Body>{rows}</Body>
}


const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }
  const onDateClick = (day:Date) => {
    setSelectedDate(day)
  }

  return(
    <CalendarContainer>
      <Header>
        <YearWithArrow>
          <Year fontSize="20px" fontWeight="bold">
            {format(currentMonth, 'yyyy M')}월
          </Year>
          <ArrowArea>
            <LeftArrowIconBtn id="arrow" onClick={prevMonth}/>
            <RightArrowIconBtn id="arrow" onClick={nextMonth}/>
          </ArrowArea>
        </YearWithArrow>
        <PlusWithExpansion>
          <PlusIconBtn id="plus"/>
          <ExpansionIconBtn id="expansion"/>
        </PlusWithExpansion>
      </Header>
      <DaysGrid/>
      <DateCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalendarContainer>
  )
}

export default Calendar;

