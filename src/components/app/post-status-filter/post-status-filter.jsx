import React from "react";

class PostStatusFilter extends React.Component {
    buttons = [
        {name: 'Все', label: 'all'},
        {name: 'Понравилось', label: 'like'},
        {name: 'Важные', label: 'important'}
    ]

    render() {


        const {getFilterValue, filterItems} = this.props
        let addingClass = '';

        const buttons = this.buttons.map((item) => {

            if(filterItems === item.label) {
                addingClass = 'btn-primary'
            }
            else {
                addingClass = 'btn-light'
            }

            return (
                <button
                    key={item.label}
                    className={`btn ${addingClass}`}
                    onClick={() => getFilterValue(item.label)}
                >
                    {item.name}
                </button>
            )
        })

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}

export default PostStatusFilter;