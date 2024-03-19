import './Banner.scss';
import { useState, useEffect } from 'react';

import BannerButton from './BannerButton';

type PropType = {
  banner: {
    src: string;
    name: string;
    date: [Date, Date];
    btn: string;
    url: string;
  };
};

const Banner = ({ banner }: PropType) => {
  const [onGoing, setGoing] = useState(false);

  const isEventOnProgress = (date: [Date, Date]) => {
    const now = new Date().getTime();
    const st = date[0].getTime();
    const fin = date[1].getTime();

    if (st < now && now < fin) {
      setGoing(true);
    }
  };

  useEffect(() => {
    isEventOnProgress(banner.date);
  }, []);

  return (
    <a className="card" href={banner.url} target="_blank">
      <span className={`banner-state ${onGoing ? 'progress' : 'end'}`}>
        {onGoing ? '진행중' : '종료'}
      </span>
      <div className="banner-img-container">
        <img src={banner.src} />
      </div>
      <div className="banner-info-container">
        <div className="banner-info-top">
          <div className="banner-name">{banner.name}</div>
          {banner.btn ? (
            <BannerButton text={banner.btn} url={banner.url} />
          ) : (
            <></>
          )}
        </div>
        <div className="banner-date">
          {banner.date[0].toLocaleString().slice(0, -3)} ~{' '}
          {banner.date[1].toLocaleString().slice(0, -3)}
        </div>
      </div>
    </a>
  );
};

export default Banner;
