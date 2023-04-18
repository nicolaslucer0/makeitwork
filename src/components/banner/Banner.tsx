import styled from "styled-components";

const StyledBanner = styled.div`
  background: black;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const CloseButton = styled.div``;
export const Banner = () => (
  <StyledBanner>
    <BannerText>
      El armario definitivo: descubre la colección Versace Icons
    </BannerText>
    <CloseButton>X</CloseButton>
  </StyledBanner>
);
