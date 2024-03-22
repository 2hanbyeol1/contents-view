import { useState, useEffect, RefObject } from 'react';
import { BannerStatusType } from '../types/banner';

const useSetBannerStatus = (
  bannerStateRef: RefObject<HTMLSpanElement>,
  date: [Date, Date]
) => {
  const [status, setStatus] = useState<BannerStatusType | ''>('');

  useEffect(() => {
    getStatus(date, bannerStateRef);
  }, []);

  const getStatus = (
    date: [Date, Date],
    bannerStateRef: RefObject<HTMLSpanElement>
  ) => {
    const now = new Date();
    const currentTime = now.getTime();
    const begin = date[0].getTime();
    const end = date[1].getTime();

    if (bannerStateRef.current) {
      if (currentTime > end) {
        setStatus('종료');
        bannerStateRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
        return;
      }
      const DDay = getDDay(date[0], now);
      if (DDay === 0 || (begin <= currentTime && currentTime <= end)) {
        setStatus('진행 중');
        bannerStateRef.current.style.backgroundColor = 'rgb(252, 91, 168)';
        return;
      }
      if (true) {
        setStatus(`D-${DDay}`);
        bannerStateRef.current.style.backgroundColor = 'rgb(255, 48, 76)';
        return;
      }
    }
  };

  const getDDay = (begin: Date, now: Date) => {
    const beginDate = begin;
    beginDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    const timeDiff = beginDate.getTime() - now.getTime();

    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환
  };

  return [status];
};

export default useSetBannerStatus;
