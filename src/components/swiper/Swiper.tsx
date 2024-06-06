import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/bundle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Link } from 'react-router-dom';
import { Pokemon } from '../../models/pokemon';
import { FC } from 'react';
import styled from 'styled-components';

export interface Props {
  pokemon: Pokemon;
}

const SwiperStyled = styled.div<Props>`
  .pokemon-img {
    min-width: 120px;
    max-height: 180px;
  }
`;

const Myswiper: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, imgUrlBack, imgUrl2, imgUrl2Back } = pokemon;

  return (
    <>
      <SwiperStyled pokemon={pokemon}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: `.swiper-button-next-${id}`,
            prevEl: `.swiper-button-prev-${id}`,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={`${id}`}>
              <img
                src={imgUrl}
                alt={name}
                className="pokemon-img"
                onMouseOver={(e) => (e.currentTarget.src = imgUrlBack)}
                onMouseOut={(e) => (e.currentTarget.src = imgUrl)}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`${id}`}>
              <img
                src={imgUrl2}
                alt={name}
                className="pokemon-img"
                onMouseOver={(e) => (e.currentTarget.src = imgUrl2Back)}
                onMouseOut={(e) => (e.currentTarget.src = imgUrl2)}
              />
            </Link>{' '}
          </SwiperSlide>
        </Swiper>
        <div className={`swiper-button-prev swiper-button-prev-${id}`}></div>
        <div className={`swiper-button-next swiper-button-next-${id}`}></div>
      </SwiperStyled>
    </>
  );
};

export default Myswiper;
