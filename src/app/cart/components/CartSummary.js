// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    componentWillMount() {
        this.recalculate(this.props);
    }

    // called on update cycle only
    // when? whenever parent called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log("CartSummary will receive props");
        console.log("Current props", this.props)
        console.log("Next Props", nextProps)
 
        if (this.props.count != nextProps.count) {
            this.recalculate(nextProps)
        }
    }
 
    //TODO: shouldComponentUpdate
    //called on update cycle
    // called when?
    // called whenever parent render called on update cycle
    // called whenever this.setState called on update cycle
    // NOT CALLED when do this.forceUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Cart Summary should update");
        console.log("Current State", this.state);
        console.log("Next State", nextState)

        return this.props.amount != nextProps.amount ||
               this.props.count != nextProps.count  ||
               this.state.discount != nextState.discount ||
               this.state.grandTotal != nextState.grandTotal;
                
        //return true; // shall call render
         //return false; // shall not call render
    }

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}