export const daysPosted = (dayPosted: any) => {
  const today: any = new Date();
  const createdAt: any = new Date(dayPosted);
  const diff = today - createdAt;
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysAgo = Math.floor(diff / (1000 * 3600 * 24));
  const month = monthList[createdAt.getMonth()];
  const day = createdAt.getDate();
  const msBetweenDates = today.getTime() - createdAt.getTime();
  let seconds = Math.floor(msBetweenDates / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  minutes = minutes % 60;

  if (daysAgo === 0 && hours === 0 && minutes === 0 && seconds < 60) {
    return `${seconds}s`;
  } else if (daysAgo === 0 && hours === 0 && minutes >= 1 && minutes <= 59) {
    return `${minutes}min`;
  } else if (daysAgo === 0 && hours >= 1 && hours <= 23) {
    return `${hours}h`;
  } else if (daysAgo <= 7 && hours > 23) {
    return `${daysAgo}d`;
  } else {
    return `${month} ${day}`;
  }
};
