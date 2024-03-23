import './BannerSection.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './Banner';

import { BANNERS } from '../../../data/banners';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function BannerSection() {
  return (
    <section className="banner-section">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        watchOverflow={true}
        className="banner-swiper"
      >
        {BANNERS.map((banner, idx) => (
          <SwiperSlide key={`banner-${idx}`}>
            <Banner banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
