//ReduxCounter.js


import React from "react";
import PropTypes from "prop-types";

//stateless/presenational
export default function ReduxCounter(props) { 
        console.log("ReduxCounter render")
        return (
            <div> 
            <h2>Redux Counter</h2>

             <h2>Counter - {props.counter}</h2>

            <button onClick={props.increment}>
                +1
            </button>

            <button onClick={() => props.actions.decrement(1)}>
                -1
            </button>

            <button onClick={props.actions.empty}>
                Empty
            </button>

            </div>
        )
} 


ReduxCounter.defaultProps = {
    
}

ReduxCounter.propTypes = {
    
}