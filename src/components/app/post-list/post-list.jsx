import React from "react";

import PostListItem from './post-list-item'

const PostList = ({data, onDelete}) => {

    const list = data.map( (item) => {

        const {id, ...restData } = item

        return (
            <PostListItem
                 key={id}
                 onDelete={() => onDelete(id)}
                 {...restData}
            />
        )
    })

    return (
        <div>
            <ul className='app-list list-group'>
                { list }
            </ul>
        </div>
    )
}

export default PostList;