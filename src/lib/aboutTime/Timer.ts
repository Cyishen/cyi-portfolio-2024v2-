export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("zh-Hans-CN", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} ${time}`;
}

// TODO* 創立的時間
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 7:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) > 1 && diffInDays < 7:
      return `${Math.floor(diffInDays)} 天前`;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} 小時前`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} 分鐘前`;
    default:
      return "剛剛";
  }
};

// TODO* 計算天數
export const calculateDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate.replace(/\//g, '-'));
  const end = new Date(endDate.replace(/\//g, '-'));
  
  const diffInTime = end.getTime() - start.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  
  return diffInDays + 1;
};