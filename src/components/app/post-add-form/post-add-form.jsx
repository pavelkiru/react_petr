import React from "react";

const PostAddForm = ({ onAdd }) => {
    return (
        <div>
            <div action="" className='bottom-panel'>
                <input
                    type="text"
                    placeholder='О чем думаешь?'
                    className='form-control new-post-label'
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                    onClick={() => {
                        onAdd('test')
                    }}
                >Добавить</button>
            </div>
        </div>
    )
}

export default PostAddForm;