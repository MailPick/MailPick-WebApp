import { EmailType } from "@/types/data.type";

const isToday = (date: Date, today: Date) => {
  return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
};
const isThisWeek = (date: Date, now: Date) => {
  const thisWeekStart = new Date(now);
  // 이번 주 월요일로 설정
  thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay() + 1);
  thisWeekStart.setHours(0, 0, 0, 0);

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(23, 59, 59, 999);  // 어제의 마지막 시간으로 설정

  return date >= thisWeekStart && date <= yesterday;
};

const isLastWeek = (date: Date, now: Date) => {
  const lastWeekStart = new Date(now);
  // 지난 주 월요일로 설정
  lastWeekStart.setDate(lastWeekStart.getDate() - lastWeekStart.getDay() - 6);
  lastWeekStart.setHours(0, 0, 0, 0);

  const lastWeekEnd = new Date(now);
  // 이번 주 월요일로 설정
  lastWeekEnd.setDate(lastWeekEnd.getDate() - lastWeekEnd.getDay() + 1);
  lastWeekEnd.setHours(0, 0, 0, 0);

  return date >= lastWeekStart && date < lastWeekEnd;
};

//이메일 목록에서 날짜를 포맷팅하는 함수
export const formatEmailDateForTitle = (emailDateString: string) => {
  const date = new Date(emailDateString);
  const now = new Date();
  const today = new Date(now);
  const currentYear = now.getFullYear();

  if (isToday(date, today)) {
    return '오늘';
  } else if (isThisWeek(date, now)) {
    return '이번주';
  } else if (isLastWeek(date, new Date())) {
    return '지난주';
  } else if (date.getFullYear() === currentYear) {
    // 현재 연도와 같은 경우, 월만 표시
    return date.toLocaleDateString('ko-KR', { month: 'long' });
  } else {
    // 현재 연도와 다른 경우, 연도와 월을 표시
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
  }
};
//카드 형식의 이메일 목록에서 날짜를 포맷팅하는 함수
export const formatDateForEmailCard = (emailDateString: string) => {
  const emailDate = new Date(emailDateString);
  const now = new Date();
  const today = new Date(now);
  const yesterday = new Date(now.setDate(now.getDate() - 1));

  const isToday = (date: Date) => {
      return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
  };

  const isYesterdayOrLater = (date: Date) => {
      return date >= yesterday;
  };

  if (isToday(emailDate)) {
      // 날짜가 오늘이면 시간을 포맷팅하여 반환
      return emailDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  } else if (isYesterdayOrLater(emailDate)) {
      // 날짜가 어제 이후면 일만 반환
      return emailDate.toLocaleDateString('ko-KR', { day: 'numeric' });
  } else {
      // 그 외의 경우 (어제 이전)는 월과 일만 반환
      return emailDate.toLocaleDateString('ko-KR', { day: 'numeric' });
  }
};

export const groupEmailsByDate = (emails: EmailType[] = []): Record<string, EmailType[]> => {
  const emailsGrouped: Record<string, EmailType[]> = {};

  if (!emails || !Array.isArray(emails)) {
    return emailsGrouped;
  }

  // 이메일을 날짜별로 그룹화
  emails.forEach((email) => {
    const dateGroup = formatEmailDateForTitle(email.date);
    if (!emailsGrouped[dateGroup]) {
      emailsGrouped[dateGroup] = [];
    }
    emailsGrouped[dateGroup].push(email);
  });

  // 각 그룹 내의 이메일을 날짜 오름차순으로 정렬
  Object.keys(emailsGrouped).forEach((dateGroup) => {
    emailsGrouped[dateGroup].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  });

  return emailsGrouped;
};
