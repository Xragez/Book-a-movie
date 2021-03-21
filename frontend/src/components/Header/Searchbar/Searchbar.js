import React from 'react';

function Searchbar(){
    return (
        <div className="d-flex">
            <input 
                className="form-control"
                type="text"
                placeholder="Search"
            />
            <button className="ml-2 btn btn-dark">
                Search
            </button>
        </div>
    );
}

export default Searchbar;