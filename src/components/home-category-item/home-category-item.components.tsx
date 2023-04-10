import { FC } from "react";
import { HomeCategoryContainer, BackgroundImage, HomeCategoryBody } from "./home-category-item.styles";


export type HomeCategoryItemProps = {
  title: string;
  imageUrl: string;
  route: string;
};

const HomeCategoryItem: FC<HomeCategoryItemProps> = ({ title, imageUrl, route }) => {
  return (
    <HomeCategoryContainer to={route} >
      <BackgroundImage imageUrl={imageUrl} />
      <HomeCategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </HomeCategoryBody>
    </HomeCategoryContainer>
  );
};

export default HomeCategoryItem;
