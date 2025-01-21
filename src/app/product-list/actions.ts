import {getCategories, getProductsBrands} from "@services/services";

export const getCategoriesAction = async () => {
    return  await getCategories();
};

export const getProductsBrandsAction = async () => {
    return  await getProductsBrands();
};


