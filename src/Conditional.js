import React from 'react'

function Conditional(props) {
    if (props.isLoading){
        return (<h1>Loading...</h1>)
    }
    else
        return (<h1>Some coll stuff about conditional rendering</h1>)
}

export default Conditional