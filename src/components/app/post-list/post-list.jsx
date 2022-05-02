import React from "react";

import PostListItem from './post-list-item'

const PostList = ({data, onDelete, onToggleImportant, onToggleLike}) => {

    const list = data.map( (item) => {

        const {id, ...restData } = item
    //    console.log(restData)
        return (
            <PostListItem
                 key={id}
                 onDelete={() => onDelete(id)}
                 onToggleImportant={() => onToggleImportant(id)}
                 onToggleLike={() => onToggleLike(id)}
                 {...restData}
            />
        )
    })
    //console.log(data)
    return (
        <div>
            <ul className='app-list list-group'>
                { list }
            </ul>
        </div>
    )
}

export default PostList;