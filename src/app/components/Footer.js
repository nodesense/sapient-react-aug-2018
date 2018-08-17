import React from 'react';

import PropTypes from 'prop-types';

// whenever JSX used, must import React

// stateless component
// functional component
// presentational component
// React calls the functional component, takes v.dom
// create and return virtual dom
export default function Footer(props) {
    console.log("Footer render");
    // props are immutable
    // props.year = 2020; // ERROR
    
    return (
        <div>
            <hr />
            <p>Copyrights @{props.year} {props.company}</p>
        </div>
    )
}

// keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // mandatory
    company: PropTypes.string // optional
}

//keyword
Footer.defaultProps = {
    company: 'React App'
}