import React from "react";

const PostAddForm = () => {
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder='О чем думаешь?'
                    className='form-control new-post-label'
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                >Добавить</button>
            </form>
        </div>
    )
}

export default PostAddForm;