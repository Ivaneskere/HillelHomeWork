import React from 'react'

export default function Winner( { winner } ) {
    return (
        <>
            {winner ? (
                <>
                    <h2>Переможець:</h2>
                    <div>{winner.text}</div>
                    <div>Голоси: {winner.Votes}</div>
                </>
            ) : (
                <p>Натисни “Show Results”</p>
            )}
        </>
    )
}
