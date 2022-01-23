import { makeVar } from "@apollo/client";
import { CategoryEnum } from "../organisms/CategoryList/CategoryList";

const initialState = CategoryEnum.Films;

export const globalCategoryState = makeVar<CategoryEnum | string>(initialState);
