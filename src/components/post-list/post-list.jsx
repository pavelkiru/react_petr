import React from "react";

import PostListItem from '../post-list-item'

const PostList = () => {
    return (
        <div>
            <ul className='app-list list-group'>
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
            </ul>
        </div>
    )
}

export default PostList;