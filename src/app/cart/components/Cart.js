// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
                   ],
            // derived data, derived from items
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
 
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //BAD, mutating state, then items also directly
        //this.state.items.push(item)
        // BAD
        //  let items = this.state.items; // ref
        //  items.push(item) // BAD mutating array directly
        //  this.setState({items: items})

        // //GOOD, clone existing items into new array,add new at end
        let items = [...this.state.items, item]

        this.setState({
            items: items
        })
        this.recalculate(items)
    }
    
    removeItem = (id) => {
        console.log("remove item ", id);

        // return a new array, exclude the item to remove
        let items = this.state
                    .items.filter( item => item.id != id);

        this.setState ({
            //sugar items: items
            items
        })
        
        this.recalculate(items)
    }

    updateItem = (id, qty) => {
        //TODO
        console.log("update", id, qty);

        let item = this.state.items.find( item => item.id == id);
        if (item && item.qty == qty) {
            console.log("NO CHANGE");
            return;
        }

        // clone the array, new array
        let items = this.state.items.map( item => {
            if (item.id == id) {
                // clone the item, update the qty
                return {...item, qty:qty}
            }
            
            return item;
        })

        this.setState({
            items
        })
        this.recalculate(items);
    }

    empty = () => {
        //TODO
         this.setState({
             items: []
         }, () => {
             console.log("Empty setstate callback")
             // this calls render again
            //this.recalculate(this.state.items)
         })

         this.recalculate([])
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        console.log("recalculate amount count")
        this.setState({
            amount,
            count
        })
 
    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        console.log("Cart will mount");
        this.recalculate(this.state.items);
 
    }

    componentDidMount() {
        console.log("Cart did mount");
        
    }
    
    
    render() {
        console.log("Cart render")
       
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>


            <CartList  items={this.state.items}  
                        removeItem={this.removeItem}
                        updateItem={this.updateItem}
                       
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}