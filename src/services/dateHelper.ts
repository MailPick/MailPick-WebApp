import { EmailType } from "@/types/data.type";

const isToday = (date: Date, today: Date) => {
  return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
};

const isYesterday = (date: Date, yesterday: Date) => {
  return date.getDate() === yesterday.getDate() &&
         date.getMonth() === yesterday.getMonth() &&
         date.getFullYear() === yesterday.getFullYear();
};
//이메일 목록에서 날짜를 포맷팅하는 함수
export const formatEmailDateforTitle = (emailDateString: Date) => {
  const date = new Date(emailDateString);
  const now = new Date();
  // 'yesterday'와 'oneYearAgo'를 계산하기 전에 'now'의 원본 값을 복사해야 함
  const today = new Date(now);
  const yesterday = new Date(now.setDate(now.getDate() - 1));
  const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));

  if (isToday(date, today)) {
    // 오늘 날짜에 대한 조건을 체크하여 "오늘"로 반환
    return '오늘';
  } else if (isYesterday(date, yesterday)) {
    // 어제 날짜에 대한 조건을 체크하여 "어제"로 반환
    return '어제';
  } else if (date > oneYearAgo) {
    // 1년 이내의 날짜에 대해서는 월과 일을 반환
    return date.toLocaleDateString('ko-KR', { month: 'long'});
  } else {
    // 1년 이전의 날짜에 대해서는 연도를 포함하여 반환
    return date.toLocaleDateString('ko-KR', { year: 'numeric' , month: 'long'});
  }
};
//카드 형식의 이메일 목록에서 날짜를 포맷팅하는 함수
export const formatDateForEmailCard = (emailDateString: Date) => {
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

//이메일 목록을 날짜별로 그룹화하는 함수
export const groupEmailsByDate = (emails: EmailType[] = []): Record<string, EmailType[]> => {
  const emailsGrouped: Record<string, EmailType[]> = {};
  if (!emails || !Array.isArray(emails)) {
    return emailsGrouped;
  }
  emails.forEach((email) => {
    const dateGroup = formatEmailDateforTitle(email.date);
    if (!emailsGrouped[dateGroup]) {
      emailsGrouped[dateGroup] = [];
    }
    emailsGrouped[dateGroup].push(email);
  });
  return emailsGrouped;
};

