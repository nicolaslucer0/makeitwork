import styled from "styled-components";
import { Product } from "../../models/Product";

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;
const ProductContainer = styled.div`
  padding: 2em;
`;

const ProductTitle = styled.div`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;
const ProductDescription = styled.div`
  color: black;
  text-align: center;
  font-size: 12px;
`;
const ProductImage = styled.img`
  object-fit: cover;
`;

type ProductsProps = {
  products: Product[];
};
export const Products = ({ products }: ProductsProps) => (
  <ProductContainer>
    <Title>Productos</Title>
    <div className="flex m-6 flex-wrap">
      {products.map((p: Product) => (
        <div
          key={p.description + p.name}
          className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3"
        >
          <ProductImage src={p.image} />
          <ProductTitle>{p.name}</ProductTitle>
          <ProductDescription>{p.description}</ProductDescription>
        </div>
      ))}
    </div>
  </ProductContainer>
);
