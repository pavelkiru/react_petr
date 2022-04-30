import React from "react";

import AppHeader from "./app-header";
import SearchPanel from './search-panel'
import PostStatusFilter from './post-status-filter'
import PostList from "./post-list";
import PostAddForm from "./post-add-form";

import './app.css'

class App extends React.Component {



    state = {
        items: [
            {id: 1, label: 'te3xt 1', important: true},
            {id: 2, label: 'te3xf 2', important: false},
            {id: 3, label: 'te3false 3', important: true},
            {id: 4, label: 'te3xt 4', important: false},
            {id: 5, label: 'te3xt 5', important: false},
            {id: 6, label: 'te3xt 6', important: false},
        ]
    }



    deleteItem = (id) => {
        this.setState( ({items}) => {
            const indexDeleteItem = items.findIndex( x => x.id === id)
            return {
                items:[
                    ...items.slice(0, indexDeleteItem),
                    ...items.slice(indexDeleteItem + 1 )
                ]
            }
        })
    }

    addItem = (text) => {
        const newItem = {
                id: this.state.items.length + 1,
                label: text,
                important: false
        }
        this.setState(({items}) => {
            return {
                   items: [
                       ...items,
                       newItem
                   ]
            }
        })
    }

    render() {

        return (
            <div className='p-2 container'>
                <h2>app</h2>

                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    data={this.state.items}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App;