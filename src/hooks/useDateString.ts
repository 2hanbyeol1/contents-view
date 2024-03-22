import { useState, useEffect } from 'react';

const useFormattedDateString = (d: Date) => {
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const year = d.getFullYear();
    const month = padTwoDigits(d.getMonth() + 1);
    const date = padTwoDigits(d.getDate());
    const hours = padTwoDigits(d.getHours());
    const minutes = padTwoDigits(d.getMinutes());
    const str = `${year}.${month}.${date} ${hours}:${minutes}`;

    setDateStr(str);
  }, []);

  return dateStr;
};

/**
 * 한자리 숫자를 두자리 문자열로 변환
 * ex. 2 => '02'
 */
const padTwoDigits = (number: number): string => {
  return (number < 10 ? '0' : '') + number;
};

export default useFormattedDateString;
