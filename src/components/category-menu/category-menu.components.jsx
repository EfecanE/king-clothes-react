import HomeCategoryItem from "../home-category-item/home-category-item.components";

import {CategoriesContainer} from "./category-menu.styles.jsx";

const CategoryMenu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <HomeCategoryItem key={id} title={title} id={id} imageUrl={imageUrl} route={route} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryMenu;
