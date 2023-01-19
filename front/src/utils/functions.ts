export const returnCorrectDay = (date: number): string => {
  if (date > 3 && date < 21) return `${date}th`;
  switch (date % 10) {
    case 1:
      return `${date}st`;
    case 2:
      return `${date}nd`;
    case 3:
      return `${date}rd`;
    default:
      return `${date}th`;
  }
};

export const convertedDateFunc = (publishedAt: string): string => {
  let convertedDate = new Date(publishedAt).toDateString().split(' ');

  const date = {
    day: returnCorrectDay(+convertedDate[2]),
    month: convertedDate[1],
    year: convertedDate[3],
  };

  return `${date.month} ${date.day}, ${date.year}`;
};
