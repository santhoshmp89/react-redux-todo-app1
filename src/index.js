import React from 'react';
import ReactDOM from 'react-dom';   
import ToDoApp from './container/ToDoApp';
import {addTodo} from './actions/todoActions';
import store from './store';    

const render = () => {
    ReactDOM.render(<ToDoApp todoLists={store.getState().todoLists}/>, document.getElementById('root'));
}
render();
store.subscribe(() => {
    render()
})
