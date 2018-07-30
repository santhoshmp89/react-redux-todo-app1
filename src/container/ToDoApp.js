import React, {Component, Fragment} from 'react';
import SearchBox from '../components/SearchBox';
import ToDoList from '../components/ToDoList';
import store from '../store';
import {addTodo} from '../actions/todoActions';

export default class ToDoApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            showCompleted: false
        }
    }

    handleChange = (val) => {
        this.setState({
            searchTerm: val
        })
    }

    submitHandle = (e) => {
        e.preventDefault(); 
        store.dispatch(addTodo(this.state.searchTerm));  
        this.setState({
            searchTerm: ""
        })
    }

    changeView = (e) => {
        e.preventDefault();
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }

    render() {
        const showCompleted = (!this.state.showCompleted ? "Show Completed":"Show Pending")
        return(
            <Fragment>
                <br />
                <br />
                <div class="container">
                    <SearchBox 
                        searchTerm={this.state.searchTerm} 
                        handleChange={this.handleChange} 
                        submitHandle={this.submitHandle}
                        />
                    <br />
                    <br />
                    {!this.state.showCompleted? <h4>ToDo Lists</h4>: <h4>Completed Lists</h4>}
                    <ul class="list-group col-sm-5">
                    {
                        this.props.todoLists.map((list, index) => {
                            if(list.completed == this.state.showCompleted) {
                                return <ToDoList list={list} key={index} index={index} handleCheckBox={this.handleCheckBox}  />
                            }                        
                        })
                    }
                    </ul>
                    <br />
                    <a href="#" onClick={this.changeView}>{showCompleted}</a>
                </div>   

           </Fragment>
        )
    }
}
