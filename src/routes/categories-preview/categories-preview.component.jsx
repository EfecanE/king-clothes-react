import { Fragment } from "react";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesArray).map((title) => {
          const products = categoriesArray[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
