import React from 'react'

const Random = ({ handleRandom }) => {
    return (
        <div className='random' onClick={handleRandom}>
            <p>random</p>
            <span class="material-symbols-outlined">
                autorenew
            </span></div>
    )
}

export default Random
