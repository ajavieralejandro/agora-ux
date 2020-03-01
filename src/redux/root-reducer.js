import {combineReducers} from 'redux';
import teamReducer from './collections/team-collection.reducer';

export default combineReducers({
    team : teamReducer
})