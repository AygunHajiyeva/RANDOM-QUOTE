import React from 'react'

const AllQuotes = ({ author, allQuotes, show, setShow }) => {
    return (
        <div className='allQuotes'>
            <div className='goback' onClick={() => { setShow(!show) }}>
                <span class="material-symbols-outlined">
                    keyboard_backspace
                </span>
            </div>
            <h1>{author}</h1>
            <div className='author-quotes'>
                {allQuotes.map((quote) => {
                    return (<div key={quote._id} className='quote'><p className='quote-text'>{quote.quoteText}</p></div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllQuotes