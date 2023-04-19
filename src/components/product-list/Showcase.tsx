import styled from "styled-components";
import { Product } from "../../models/Product";

const ShowcaseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2em;
`;

const ProductImageContainer = styled.div`
  width: 20%;
  position: relative;
  display: flex;
`;

const ProductOverlay = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  background: #000000a3;
  transition: 0.4s;
  &:hover {
    opacity: 1;
  }
`;
const ProductText = styled.div`
  color: white;
  font-size: 2rem;
`;
const ProductImage = styled.img`
  object-fit: cover;
`;

type ShowcaseProps = {
  products: Product[];
};
export const Showcase = ({ products }: ShowcaseProps) => {
  return (
    <ShowcaseContainer>
      {products.map((p: Product) => {
        return (
          <ProductImageContainer key={p.name + p.description}>
            <ProductOverlay>
              <ProductText>{p.name}</ProductText>
            </ProductOverlay>
            <ProductImage src={p.image} />
          </ProductImageContainer>
        );
      })}
    </ShowcaseContainer>
  );
};
