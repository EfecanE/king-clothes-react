import { HomeCategoryContainer, BackgroundImage, HomeCategoryBody } from "./home-category-item.styles.jsx";

const HomeCategoryItem = ({ title, imageUrl, route }) => {
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
