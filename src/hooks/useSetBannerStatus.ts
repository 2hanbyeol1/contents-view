import { useState, useEffect, RefObject } from 'react';
import { BANNER_STATUS } from '../types/banner';

const useSetBannerStatus = (
  bannerStateRef: RefObject<HTMLSpanElement>,
  date: [Date, Date]
) => {
  const [status, setStatus] = useState<BANNER_STATUS | ''>('');

  useEffect(() => {
    getStatus(date, bannerStateRef);
  }, []);

  const getStatus = (
    date: [Date, Date],
    bannerStateRef: RefObject<HTMLSpanElement>
  ) => {
    const now = new Date().getTime();
    const begin = date[0].getTime();
    const end = date[1].getTime();

    if (bannerStateRef.current)
      if (begin <= now && now <= end) {
        setStatus('진행 중');
        bannerStateRef.current.style.backgroundColor = 'rgb(252, 91, 168)';
      } else if (now > end) {
        setStatus('종료');
        bannerStateRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
      } else {
        setStatus(`D-${getDDay(begin - now)}`);
        bannerStateRef.current.style.backgroundColor = 'rgb(255, 48, 76)';
      }
  };

  const getDDay = (timeDiff: number): number => {
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환
  };

  return [status];
};

export default useSetBannerStatus;
