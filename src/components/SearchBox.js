import React from 'react';

const SearchBox = (props) => {
    return(
        <form className="form-inline" onSubmit={(e) => props.submitHandle(e)} >
            <div className="form-group mx-sm-3 mb-2">                
                <input type="text" 
                    className="form-control" 
                    placeholder="Add To Do" 
                    value={props.searchTerm} 
                    onChange={e => props.handleChange(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add</button>
        </form>
    )
}

export default SearchBox;