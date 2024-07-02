import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Pokemon } from '../../models/pokemon';

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
  const {
    name,
    id,
    imgUrl,
    imgUrlBack,
    imgUrl2,
    imgUrl2Back,
    imgUrl3,
    imgUrl3Back,
  } = pokemon;

  const playAudio = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  const clickAudioSrc = '/assets/click.mp3';
  const whoIsAudioSrc = '/assets/who-is-pokemon.mp3';

  return (
    <SwiperStyled pokemon={pokemon}>
      <Swiper
        effect="cards"
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
        {[
          { img: imgUrl, imgBack: imgUrlBack },
          { img: imgUrl2, imgBack: imgUrl2Back },
          { img: imgUrl3, imgBack: imgUrl3Back },
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={`${id}`}>
              <LazyLoadImage
                src={image.img}
                alt={name}
                className="pokemon-img"
                effect="opacity"
                onClick={() => playAudio(whoIsAudioSrc)}
                onMouseOver={(e) => (e.currentTarget.src = image.imgBack)}
                onMouseOut={(e) => (e.currentTarget.src = image.img)}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`swiper-button-prev swiper-button-prev-${id}`}
        onClick={() => playAudio(clickAudioSrc)}
      ></button>
      <button
        className={`swiper-button-next swiper-button-next-${id}`}
        onClick={() => playAudio(clickAudioSrc)}
      ></button>
    </SwiperStyled>
  );
};

export default Myswiper;
