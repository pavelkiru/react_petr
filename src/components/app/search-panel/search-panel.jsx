import React from "react";

const SearchPanel = ({inputSearchPanel, searchPosts, addSearchData}) => {
    return (
        <div>
            <input
                type="text"
                className='form-control search-input'
                placeholder='поиск по записям'
                value={inputSearchPanel}
                    onChange={(e) => {
                        addSearchData(e.target.value)
                        searchPosts()
                    }
                }
            />
        </div>
    )
}

export default SearchPanel;