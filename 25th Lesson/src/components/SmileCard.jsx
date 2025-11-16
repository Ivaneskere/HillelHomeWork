import React from 'react'

export default function SmileCard( {smile ,onVote}) {
    return (
        <>  
            <button onClick={ () => onVote(smile.id)}>{smile.text}</button>
            <h4>{smile.Votes}</h4>
        </>
    )
}
