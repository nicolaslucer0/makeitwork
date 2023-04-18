import styled from "styled-components";

const PromoContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60vh;
  justify-content: space-between;
  background: black;
  color: white;
  margin: 2em 0;
  &.left {
    flex-direction: row;
  }

  &.right {
    flex-direction: row-reverse;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PromoImageContainer = styled.div`
  width: 50%;
`;

const PromoTitle = styled.h2`
  font-size: 4rem;
`;

const PromoSubTitle = styled.h4`
  font-size: 2rem;
`;

const PromoImage = styled.img`
  object-fit: cover;
  height: 60vh;
  width: 100%;
`;

type PromoProps = {
  mode: string;
  img: string;
  title: string;
  subtitle: string;
  variant: string;
};
export const Promo = ({ mode, img, title, subtitle, variant }: PromoProps) => (
  <PromoContainer className={mode}>
    <TextContainer>
      <PromoTitle>{title}</PromoTitle>
      <PromoSubTitle>{subtitle}</PromoSubTitle>
    </TextContainer>
    <PromoImageContainer>
      <PromoImage src={img} alt="promo" />
    </PromoImageContainer>
  </PromoContainer>
);
