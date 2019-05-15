import axios from 'axios';

axios.defaults.baseURL = "https://ycl641scac.execute-api.us-west-2.amazonaws.com/staging";

const URLS = {
    PRODUCTS: {
        GET: '/products',
    },
}

const getProducts = (page, filter) => {
    const params = {
        page: page || 0,
    };

    if (filter)
        params.subcategory = filter;

    return axios.get(URLS.PRODUCTS.GET, {params: params})
};

const API = {
    PRODUCTS: {
        GET: getProducts
    },
};

export {API}
