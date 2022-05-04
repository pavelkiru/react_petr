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
            {id: 1, label: 'te3xt 1', important: false, like: false},
            {id: 2, label: 'te3xf 2', important: true, like: true},
            {id: 3, label: 'te3fa 3', important: false, like: false},
            {id: 4, label: 'te3xt 4', important: false, like: false},
            {id: 5, label: 'te3xt 5', important: false, like: true},
            {id: 6, label: 'te3xt 6', important: true, like: true},
        ],
        inputPostAddForm: '',
        inputSearchPanel: '',

    }

    indexChangingItem = (array, id) => {
        return array.findIndex(x => x.id === id)
    }

    onChangeItem = (changingKey, id) => {
        this.setState(({items}) => {
            const index = this.indexChangingItem(items, id);
            const oldItem = items[index];

            const newItem = {
                ...oldItem,
                [changingKey]: !oldItem[changingKey]
            }
            return {
                items: [
                    ...items.slice(0, index),
                    newItem,
                    ...items.slice(index + 1)
                ]
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({items}) => {
            const index = this.indexChangingItem(items, id)
            return {
                items: [
                    ...items.slice(0, index),
                    ...items.slice(index + 1)
                ]
            }
        })
    }

    addItem = () => {
        const newItem = {
            id: this.state.items.length + 1,
            label: this.state.inputPostAddForm,
            important: false
        }
        this.setState(({items}) => {
            return {
                items: [
                    ...items,
                    newItem
                ],
                inputPostAddForm: ''
            }
        })
    }

    onToggleImportant = (id) => {
        this.onChangeItem('important', id)
    }

    onToggleLike = (id) => {
        this.onChangeItem('like', id)
    }

    changeInputData = (data) => {
        this.setState(({inputPostAddForm}) => {
            return {
                inputPostAddForm: data
            }
        })
    }

    addSearchData = (data) => {
        this.setState( ({inputSearchPanel}) => {
            return {
                inputSearchPanel: data
            }
        })
    }

    searchPosts = (items, searchData ) => {
        if(searchData == '' ) {
            return items
        }

        if(items) {

            let data2 = items.filter( (item) => {
                return item.label.indexOf(searchData) > -1
            } )
            return data2;
        }
    }

    render() {
        let totalImportant = 0;
        let totalLike = 0;
        let totalItems = this.state.items.length
        const {items, inputSearchPanel} = this.state;

        const searchResults = this.searchPosts(items, inputSearchPanel)

        this.state.items.map((item) => {
            if (item.important) {
                totalImportant++
            }
            if (item.like) {
                totalLike++
            }
        })


        return (
            <div className='p-2 container'>
                <h2>app</h2>

                <AppHeader
                    totalItems={totalItems}
                    totalLike={totalLike}
                    totalImportant={totalImportant}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel
                        searchPosts={this.searchPosts}
                        inputSearchPanel={this.inputSearchPanel}
                        addSearchData={this.addSearchData}
                    />
                    <PostStatusFilter/>
                </div>
                <PostList
                 //   data={this.searchResult}
                    data={searchResults}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                    inputPostAddForm={this.state.inputPostAddForm}
                    changeInputData={this.changeInputData}
                />
            </div>
        )
    }
}

export default App;