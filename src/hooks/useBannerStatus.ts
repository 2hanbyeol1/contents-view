import { useState, useEffect, useRef, RefObject } from 'react';
import { BannerStatusType } from '../types/banner';

const useBannerStatus = (date: [Date, Date]) => {
  const [status, setStatus] = useState<BannerStatusType | ''>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  useEffect(() => {
    getStatus(date);
  }, []);

  const getStatus = (date: [Date, Date]) => {
    const now = new Date();
    const currentTime = now.getTime();
    const begin = date[0].getTime();
    const end = date[1].getTime();

    if (currentTime > end) {
      setStatus('종료');
      setBackgroundColor('rgb(0, 0, 0)');
      return;
    }

    const DDay = getDDay(date[0], now);
    if (DDay === 0 || (begin <= currentTime && currentTime <= end)) {
      setStatus('진행 중');
      setBackgroundColor('rgb(252, 91, 168)');
      return;
    }

    setStatus(`D-${DDay}`);
    setBackgroundColor('rgb(255, 48, 76)');
  };

  const getDDay = (begin: Date, now: Date) => {
    const beginDate = begin;
    beginDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    const timeDiff = beginDate.getTime() - now.getTime();

    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환
  };

  return { backgroundColor, status };
};

export default useBannerStatus;
