import { ProductFilters } from '../actions';

const initialState = {
    productFilter: ProductFilters.ALL,
}

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_FILTER':
            return {
                ...state,
                productFilter: action.filter,
            };
        default:
            return state;
    }
}

export default filter;
