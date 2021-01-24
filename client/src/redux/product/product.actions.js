import ProductActionTypes from './product.types';

export const fetchProductStart = ({productId}) => ({
   type: ProductActionTypes.FETCH_PRODUCT_START,
   payload: productId
});

export const fetchProductSuccess = productMatch => ({
   type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
   payload: productMatch
});

export const fetchProductFailure = errorMessage => ({
   type: ProductActionTypes.FETCH_PRODUCT_FAILURE,
   payload: errorMessage
});
