
import React from "react";
import PropTypes from "prop-types";

export default function Contact(props) { 
        // url data shall be received as props
        // match is special property from react router
        let params = props.match.params;
        console.log("PROPS ", props)

        return (
            <div> 
            <h2>Contact Page-{params.country}</h2>
            </div>
        )
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}