import { environment } from 'src/environments/environment';

export const adminLoginUrl = environment.apiUrl + '/admin/login';
export const getOrderUrl = environment.apiUrl + '/admin/order/get-order-list';
export const addOrderUrl = environment.apiUrl + '/admin/order/add-order';
export const editOrderUrl = environment.apiUrl + '/admin/order/update-order';
export const getProductsUrl =
  environment.apiUrl + '/admin/product/get-product-list';
export const addProductUrl = environment.apiUrl + '/admin/product/add-product';
export const editProductUrl =
  environment.apiUrl + '/admin/product/update-product';
export const deleteProductUrl =
  environment.apiUrl + '/admin/product/delete-product';
export const getCategoryUrl =
  environment.apiUrl + '/admin/category/get-category-list';
export const addCategoryUrl =
  environment.apiUrl + '/admin/category/add-category';
export const editCategoryUrl =
  environment.apiUrl + '/admin/category/update-category';
export const getVendorUrl =
  environment.apiUrl + '/admin/vendor/get-vendor-list';
export const addVendorUrl = environment.apiUrl + '/admin/vendor/add-vendor';
export const editVendorUrl = environment.apiUrl + '/admin/vendor/update-vendor';
export const getLowStockUrl =
  environment.apiUrl + '/admin/product/get-low-stock-product';
export const getVariantMasterUrl =
  environment.apiUrl + '/admin/variant/get-variant-list';
export const addVariantMasterUrl =
  environment.apiUrl + '/admin/variant/create-variant';
export const editVariantMasterUrl =
  environment.apiUrl + '/admin/variant/update-variant';
export const deleteVariantMasterUrl =
  environment.apiUrl + '/admin/variant/delete-variant';
export const getVariantDataUrl =
  environment.apiUrl + '/admin/variant/get-variant-data-list';
export const addVariantDataUrl =
  environment.apiUrl + '/admin/variant/create-data-variant';
export const editVariantDataUrl =
  environment.apiUrl + '/admin/variant/update-data-variant';
export const deleteVariantDataUrl =
  environment.apiUrl + '/admin/variant/delete-data-variant';
export const getVariantActiveUrl =
  environment.apiUrl + '/admin/variant/get-variant-active-list';
export const getCountryListUrl =
  environment.apiUrl + '/admin/country/get-country-list';
export const getStateListUrl =
  environment.apiUrl + '/admin/state/get-state-list';
export const getCityListUrl = environment.apiUrl + '/admin/city/get-city-list';
