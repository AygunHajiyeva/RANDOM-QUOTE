import React from 'react'

const QuoteInfo = ({ author, genre, handleClick }) => {
    return (
        <div className='quote-info' onClick={handleClick}>
            <span class="material-symbols-outlined arrow" >
                arrow_forward
            </span>
            <p className='author'>{author}</p>
            <p className='genre'>{genre}</p>
        </div>
    )
}

export default QuoteInfo