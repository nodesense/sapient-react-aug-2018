import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class Header extends Component {
    //ES.NEXT static field inside class
    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {
        title: 'React App'
    }

    constructor() {
        super(); //Must
    }

    render() {
        //this.props (keyword)
        console.log('Header render')
        return (
            <div>
                <h2>{this.props.title}</h2>
                <hr />
            </div>
        )
    }
}