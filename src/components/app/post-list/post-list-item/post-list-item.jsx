import React from "react";

class PostListItem extends React.Component {

    render() {
        const { label, onDelete, onToggleImportant, onToggleLike, like, important } = this.props;

        let classStar = 'app-list-item d-flex justify-content-between';
        if(!important) {
            classStar += ' important';
        }

        let classHeart = 'btn-sm';
        if(like) {
            classHeart+= ' red-heart'
        }

        return (
            <li className={classStar}>
            <span className='app-list-item-label'>
                {label}
            </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        onClick={onToggleImportant}
                        type='button'
                        className='btn-star btn-sm'>
                        <i className="fa-solid fa-star"></i>
                    </button>

                    <button
                        type='button'
                        className='btn-trash btn-sm'
                        onClick={onDelete}
                    >
                        <i className='fa fa-trash'></i>
                    </button>

                    <button
                        onClick={onToggleLike}
                        type='button'
                        className={classHeart}>
                        <i className="fa fa-heart"></i>
                    </button>


                </div>
            </li>
        )
    }
}


export default PostListItem;