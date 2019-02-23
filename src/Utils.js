import { getTime, format } from 'date-fns';

const getDate = () => {
  const time = getTime(new Date());
  const currentTime = format(time, ['hh:mm - DD/MM/YYYY']);

  return currentTime;
};

export default getDate;
