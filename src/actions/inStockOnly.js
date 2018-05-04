export const SET_IN_STOCK_ONLY = 'SET_IN_STOCK_ONLY';

export function setInStockOnly(inStockOnly) {
    return {
        type: SET_IN_STOCK_ONLY,
        body: inStockOnly
    };
}