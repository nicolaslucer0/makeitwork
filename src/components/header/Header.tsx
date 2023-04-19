import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./../../assets/carousel/1.jpg";
import slide5 from "./../../assets/carousel/5.webp";
import slide2 from "./../../assets/carousel/2.jpeg";
import slide3 from "./../../assets/carousel/3.jpeg";
import slide4 from "./../../assets/carousel/4.jpeg";
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

export const Header = () => {
  const images = [slide5, slide1, slide2, slide3, slide4];

  return (
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
};
