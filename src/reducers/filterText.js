import { createReducer } from './reducerUtilities'
import { SET_FILTER_TEXT } from '../actions/filterText';

function setFilterText(state, action) {
    return action.body;
}

export default createReducer('', {
    [SET_FILTER_TEXT]: setFilterText
});