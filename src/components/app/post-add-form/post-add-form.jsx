import React from "react";

const PostAddForm = ({onAdd, formData, changeInputData}) => {
    return (
        <form className='bottom-panel' onSubmit={(e) => {
                e.preventDefault()
                onAdd()
            }
        }>
            <input
                type="text"
                placeholder='О чем думаешь?'
                className='form-control new-post-label'
                value={formData}
                onChange={(e) => changeInputData(e.target.value)}
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
            >Добавить
            </button>
        </form>

    )
}

export default PostAddForm;