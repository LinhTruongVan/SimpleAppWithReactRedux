import { createReducer } from './reducerUtilities';
import { SET_IN_STOCK_ONLY } from '../actions/inStockOnly';

function setInStockOnly(state, action) {
    return action.body;
}

export default createReducer(false, {
    [SET_IN_STOCK_ONLY]: setInStockOnly
});