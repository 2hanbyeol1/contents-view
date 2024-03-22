import './Header.scss';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useLocation, Link } from 'react-router-dom';

import { HEADER_ITEMS } from '../../constants/header';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-current">
        🩷 {HEADER_ITEMS[location.pathname]} 🩷
      </div>
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={4}
        className="header-swiper"
      >
        {Object.entries(HEADER_ITEMS)
          .filter((item) => location.pathname !== item[0])
          .map((item) => {
            const path = item[0];
            const name = item[1];
            return (
              <SwiperSlide key={path}>
                <Link className={'header-item'} to={path}>
                  {name}
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </header>
  );
};

export default Header;
