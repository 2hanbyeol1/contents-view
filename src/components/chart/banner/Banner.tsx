import './Banner.scss';
import { useRef } from 'react';
import BannerButton from './BannerButton';
import useSetBannerStatus from '../../../common/hooks/useSetBannerStatus';

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
  const bannerStatusRef = useRef<HTMLSpanElement>(null);

  const [status] = useSetBannerStatus(bannerStatusRef, banner.date);

  return (
    <div>
      <a className="card" href={banner.url} target="_blank">
        <span ref={bannerStatusRef} className={`banner-status`}>
          {status}
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
    </div>
  );
};

export default Banner;
