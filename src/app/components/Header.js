// Header.js
import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

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

                <NavLink className="button"
                         activeClassName="success"
                         exact
                         to="/">
                        Home 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/products">
                        Products 
                </NavLink>


                <NavLink className="button"
                         activeClassName="success"
                         to="/cart">
                        Cart 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/about">
                        About 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/contact/india">
                        Contact 
                </NavLink>

                 <NavLink className="button"
                         activeClassName="success"
                         to="/counter">
                        Counter 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/redux">
                        Redux Counter 
                </NavLink>


                <hr />
            </div>
        )
    }
}