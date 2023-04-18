import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styled from "styled-components";
import "swiper/css";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const SliderImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;
type HeaderProps = {
  images: string[];
};
export const Header = ({ images }: HeaderProps) => (
  <HeaderContainer>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image) => (
        <SwiperSlide key={`image-${image}`}>
          <SliderImage src={image} alt="asd" />
        </SwiperSlide>
      ))}
    </Swiper>
  </HeaderContainer>
);
