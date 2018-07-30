import {ADD_TODO, REMOVE_TODO, MAKE_COMPLETED} from '../constants';

const addTodo = (value) => {
    return {
        type: ADD_TODO,
        value
    }
}

const todoCompleted = (list, index) => {    
    return {
        type: MAKE_COMPLETED,
        index,
        list
    }
}

const removeToDo = (index) => {
    return {
        type: REMOVE_TODO,
        index
    }
}

export { addTodo, todoCompleted, removeToDo }; 