export const setProductFilter = filter => ({
    type: 'SET_PRODUCT_FILTER',
    filter
});

export const ProductFilters = {
    ALL: 'all',
    EYESHADOW: 'eyeshadow',
    CONCEALER: 'concealer',
    FOUNDATION: 'foundation',
    LIPSTICK: 'lipstick',
    BLUSH: 'blush',
}

export const incrementLike = () => ({
    type: 'INCREMENT_LIKE',
});

export const incrementDislike = () => ({
    type: 'INCREMENT_DISLIKE',
});