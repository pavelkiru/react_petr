import React from "react";

import PostListItem from '../post-list-item'

const PostList = ({data}) => {

    const list = data.map( (item) => {

        const {id, ...restData } = item

        return (
            <PostListItem
                 key={item.id}
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