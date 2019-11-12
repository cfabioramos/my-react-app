import React from 'react'

function Conditional(props) {
    // Conditional rendering
    // and the "and" operator
    return (
        <div>
            {props.isLoading ? <h2>Loading...</h2> : <h1>Some coll stuff about conditional rendering</h1>}
            {props.isLoading && <h3>Wait a second...</h3>}
        </div>
    )
}

export default Conditional