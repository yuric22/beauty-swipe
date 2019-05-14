import axios from 'axios';
// import Cookies from 'universal-cookie';

axios.defaults.baseURL = "https://ycl641scac.execute-api.us-west-2.amazonaws.com/staging";

const URLS = {
    PRODUCTS: {
        GET: '/products',
    },
}

const getProducts = (page) => axios.get(URLS.PRODUCTS.GET, {params: {page: page}});

const API = {
    PRODUCTS: {
        GET: getProducts
    },
};

export {API}
