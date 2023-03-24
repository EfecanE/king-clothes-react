import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
