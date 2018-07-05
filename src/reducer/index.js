import {combineReducers} from 'redux';
import tasks from './tasks.js';
import currentState from './currentState';

const reducer=combineReducers({
    tasks,
    currentState
});

export default reducer;