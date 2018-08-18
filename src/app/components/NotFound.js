
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        console.log("PROPS ", props)

        return (
            <div> 
            <h2>Page Not Found</h2>
            
            <button onClick={ () => props.history.push("/cart") }>
                    Cart
            </button>

             <button onClick={ () => props.history.goBack() }>
                    Back
            </button>


            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}