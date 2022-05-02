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

        formData: ''

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
            label: this.state.formData,
            important: false
        }
        this.setState(({items}) => {
            return {
                items: [
                    ...items,
                    newItem
                ],
                formData: ''
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
        console.log(data)

        this.setState(({formData}) => {
            return {
                formData: data
            }
        })
    }

    render() {
        let totalImportant = 0;
        let totalLike = 0;
        let totalItems = this.state.items.length
        //  console.log(this.state.items)
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
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    data={this.state.items}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                    formData={this.state.formData}
                    changeInputData={this.changeInputData}
                />
            </div>
        )
    }
}

export default App;