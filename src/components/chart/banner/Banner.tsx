import './Banner.scss';
import { useRef } from 'react';
import BannerButton from './BannerButton';
import useBannerStatus from '../../../hooks/useBannerStatus';
import useFormattedDateString from '../../../hooks/useDateString';
import { BannerType } from '../../../types/banner';

type PropType = {
  banner: BannerType;
};

const Banner = ({ banner }: PropType) => {
  const bannerStatusRef = useRef<HTMLSpanElement>(null);

  const [status] = useBannerStatus(bannerStatusRef, banner.date);
  const [startDateStr] = useFormattedDateString(banner.date[0]);
  const [endDateStr] = useFormattedDateString(banner.date[1]);

  return (
    <div>
      <a className="card" href={banner.url}>
        <span ref={bannerStatusRef} className={`banner-status`}>
          {status}
        </span>
        <div className="banner-img-container">
          <img src={banner.src} alt="banner-img" />
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
            {startDateStr} ~ {endDateStr}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
