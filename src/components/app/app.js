import React from "react";

import AppHeader from "../app-header";
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {

    const data = {
        items: [
            {id: 1, label: 'te3xt 1', important: true},
            {id: 2, label: 'te3xfdfdt 2', important: false},
            {id: 3, label: 'te3false 3', important: true},
            {id: 4, label: 'te3xt 4', important: false},
        ]
    }

    return (
        <div className='p-2 container'>
            <h2>app</h2>

            <AppHeader />
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList data={data.items}/>
            <PostAddForm />
        </div>
    )
}

export  default App;