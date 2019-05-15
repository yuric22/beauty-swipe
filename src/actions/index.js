export const setProductFilter = filter => ({
  type: 'SET_PRODUCT_FILTER',
  filter
});

export const getProductFilter = () => ({
  type: 'GET_PRODUCT_FILTER',
});

export const ProductFilters = {
  ALL: 'all',
  EYESHADOW: 'eyeshadow',
  CONCEALER: 'concealer',
  FOUNDATION: 'foundation',
  LIPSTICK: 'lipstick',
  BLUSH: 'blush',
}
