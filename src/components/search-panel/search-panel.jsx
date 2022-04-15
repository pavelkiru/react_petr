import React from "react";

const SearchPanel = () => {
    return (
        <div>
            <input
                type="text"
                className='form-control search-input'
                placeholder='поиск по записям'
            />
        </div>
    )
}

export default SearchPanel;