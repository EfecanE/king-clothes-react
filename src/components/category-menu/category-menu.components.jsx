import "./category-menu.styles.scss";
import CategoryItem from "../category-item/category-item.components";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryMenu;
