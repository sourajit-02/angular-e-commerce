import { environment } from 'src/environments/environment';

export const loginUrl = environment.apiUrl + '/signin';
export const getUserUrl = environment.apiUrl + '/user/get-user-details';
export const addUsersUrl = environment.apiUrl + '/regsiter-user';
export const editUserUrl = environment.apiUrl + '/user/edit-user';
export const productsUrl = environment.apiUrl + '/product/feature-product';
export const CategoeyUrl = environment.apiUrl + '/category-list';
export const getCartUrl = environment.apiUrl + '/cart-item-list';
export const addCartUrl = environment.apiUrl + '/cart/add-cart';
export const editCartUrl = environment.apiUrl + '/cart/update-cart';
export const deleteCartUrl = environment.apiUrl + '/cart/delete-cart';
