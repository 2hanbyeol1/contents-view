import './Banner.scss';
import { useRef } from 'react';
import BannerButton from './BannerButton';
import useBannerStatus from '../../../hooks/useBannerStatus';
import useFormattedDateString from '../../../hooks/useDateString';
import { BannerType } from '../../../types/banner';
import Card from '../../common/Card';

type PropType = {
  banner: BannerType;
};

const Banner = ({ banner }: PropType) => {
  const { backgroundColor, status } = useBannerStatus(banner.date);
  const startDateStr = useFormattedDateString(banner.date[0]);
  const endDateStr = useFormattedDateString(banner.date[1]);

  const Content = () => {
    return (
      <>
        <span style={{ backgroundColor }} className={`banner-status`}>
          {status}
        </span>
        <div className="banner-content">
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
      </>
    );
  };

  return (
    <div className="banner">
      <Card url="" src={banner.src} content={<Content />} />
    </div>
  );
};

export default Banner;
