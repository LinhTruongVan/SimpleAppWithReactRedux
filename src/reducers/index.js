import { combineReducers } from 'redux';

import productsReducer from './products';
import filterTextReducer from './filterText';
import inStockOnlyReducer from './inStockOnly';

export default combineReducers({
    products: productsReducer,
    filterText: filterTextReducer,
    inStockOnly: inStockOnlyReducer
});