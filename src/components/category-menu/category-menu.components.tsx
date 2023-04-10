import { FC } from "react";
import HomeCategoryItem from "../home-category-item/home-category-item.components";

import {CategoriesContainer} from "./category-menu.styles";

export type CategoryMenuProps = {
  categories: {
    title: string;
    id: number;
    imageUrl: string;
    route: string;
  }[];
};

const CategoryMenu: FC<CategoryMenuProps> = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <HomeCategoryItem key={id} title={title} imageUrl={imageUrl} route={route} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryMenu;
