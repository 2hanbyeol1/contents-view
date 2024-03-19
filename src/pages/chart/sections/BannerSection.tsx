import './BannerSection.scss';

import { useState } from 'react';
import Banner from '../../../components/chart/banner/Banner';
import { banners } from '../../../data/dummy';

const BannerSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="banner-section">
      <div className="banner-group">
        <div className="banner-inner">
          {banners.map((banner, idx) => {
            return <Banner key={`banner-${idx}`} banner={banner} />;
          })}
        </div>
      </div>
      <div className="banner-nav">
        {banners.map((_, idx) => (
          <div
            key={`banner-nav-${idx}`}
            className={`nav-btn${idx === active ? ' active' : ''}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
