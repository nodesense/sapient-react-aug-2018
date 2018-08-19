//Counter.js
import React, {Component} from "react";
import PropTypes from "prop-types";

import store from "../store";
import * as actions from "../state/actions";

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.unsubscribeFn = store.subscribe ( ()=> {
            console.log('Home Susbcribe');
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        //console.log(this.unsubscribeFn);
        this.unsubscribeFn();
    }

    increment = () => {
        let action = actions.increment(1)
        console.log("Action ", action)

        store.dispatch(action)
        console.log("STATE", store.getState())
    }

    decrement = () => {
        
    }
    
    render() {
        console.log('Counter render')

        const state = store.getState()

        return (
            <div> 
            <h2>Counter - {state.counter}</h2>

            <button onClick={this.increment}>
                +1
            </button>

            <button onClick={this.decrement}>
                -1
            </button>
            

            </div>
        )
    }
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}