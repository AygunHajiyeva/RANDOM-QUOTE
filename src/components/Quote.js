import React from 'react'

const Quote = ({ quote }) => {
    return (
        <div className='quote'>
            <p className='quote-text'>{quote}</p>
        </div>
    )
}

export default Quote