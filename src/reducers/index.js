import { combineReducers } from 'redux';
import toDoLists from './todoReducers';

const rootReducers = combineReducers({
    todoLists: toDoLists
})

export default rootReducers;