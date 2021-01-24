import ProductActionTypes  from './product.types';

const INITIAL_STATE  = {
    product: null,
    isFetching: false,
};

const productReducer =(state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT_START:
                return {
                    ...state,
                   isFetching: true,
                   errorMessage: undefined,
                   productId: action.payload
                };


        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                product: action.payload,
            };
        
        case ProductActionTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
         
        default: 
        return state;
    }
}

export default productReducer;
