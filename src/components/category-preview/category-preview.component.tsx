import { FC } from "react";

import ProductCard from "../product-card/product-card.components";

import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./category-preview.styles";

export type CategoryPreviewProps = {
  title: string;
  products: {
    id: number;
    name: string;
    imgUrl: string;
    price: number;
  }[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
