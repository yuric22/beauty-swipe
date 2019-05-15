import { ProductFilters } from '../actions';

const initialState = {
    productFilter: ProductFilters.ALL,
}

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_FILTER':
            console.log("SET", action.filter)
            return {
                ...state,
                productFilter: action.filter,
            };
        default:
            console.log("GET", state)
            return state;
    }
}

export default filter;
