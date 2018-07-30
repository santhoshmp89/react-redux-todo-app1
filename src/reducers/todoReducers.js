import {ADD_TODO, REMOVE_TODO, MAKE_COMPLETED} from '../constants';

const toDoLists = (state=[], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {
                    name: action.value, 
                    completed: false
                }];

        case MAKE_COMPLETED:       
            return [                
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {completed: !state[action.index].completed}),
                ...state.slice(action.index + 1)
            ];
        
        case REMOVE_TODO: 
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]

        default:
            return state
    }
}


export default toDoLists;
