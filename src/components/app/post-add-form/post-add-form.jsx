import React from "react";

const PostAddForm = ({onAdd, inputPostAddForm, changeInputData}) => {
    return (
        <form className='bottom-panel'
              onSubmit={(e) => {
                  e.preventDefault()
                  if (e.target[0].value === '') return
                  onAdd()
              }
              }>
            <input
                type="text"
                placeholder='О чем думаешь?'
                className='form-control new-post-label'
                value={inputPostAddForm}
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