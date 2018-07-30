import React, { Component } from 'react';
import store from '../store';
import {todoCompleted, removeToDo} from '../actions/todoActions';

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
    }
    
    handleCheckBox = () => {        
        this.setState({
            completed: !this.state.completed
        })        
        store.dispatch(todoCompleted(this.props.list, this.props.index))
    }

    HandleRemoveToDo = () => { 
        console.log("remove");
        store.dispatch(removeToDo(this.props.index))
    }

    render() {
        return(        
            <li className="list-group-item">
                <input type="checkbox" checked={this.state.completed} onChange={this.handleCheckBox} value={this.state.completed} />&nbsp;&nbsp;
                {this.props.list.name}
                <span className="float-right" onClick={this.HandleRemoveToDo}>X</span>
            </li>
        )
    }
    
}

export default ToDoList;