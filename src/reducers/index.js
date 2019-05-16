import { combineReducers } from 'redux';
import filter from './productFilter';
import interactionCount from './interactionCount';

export default combineReducers({
    filter,
    interactionCount,
});
