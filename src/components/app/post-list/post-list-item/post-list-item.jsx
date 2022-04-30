import React from "react";

class PostListItem extends React.Component {

    state = {
       // important: this.props.important
        important: false,
        like: false
    }

    toggleImportant = () => {
        this.setState( {
            important: !this.state.important
        })
    }

    toggleLike = () => {
        this.setState( {
            like: !this.state.like
        })
    }

    render() {
        const { label, onDelete } = this.props;
        const {like, important} =this.state;

        let classStar = 'app-list-item d-flex justify-content-between';
        if(important) {
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
                        onClick={this.toggleImportant}
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
                        onClick={this.toggleLike}
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