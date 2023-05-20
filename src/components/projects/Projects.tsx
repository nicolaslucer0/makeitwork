import styled from "styled-components";
import { Subtitle } from "../../styles/styles";
import federal from "./../../assets/carousel/federal.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProyectContainer = styled.div`
  padding: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Projects = () => {
  return (
    <ProyectContainer>
      <Subtitle>Nuestros proyectos</Subtitle>
      <Swiper>
        <SwiperSlide>
          <img alt="federql" src={federal} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="federql" src={federal} />
        </SwiperSlide>
      </Swiper>
    </ProyectContainer>
  );
};
