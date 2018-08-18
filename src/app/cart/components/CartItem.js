// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.qty != this.state.qty) {
            this.setState({qty: nextProps.item.qty})
        }
    }
 

    componentDidMount() {
        // access the view elements
        // REAL DOM through ref
        this.inputElement.focus(); // focus is REAL DOM API
    }
    
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange={ (e) => this.setState({qty: e.target.value}) }
                            ref= { (elem) => this.inputElement = elem  }
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                    {/* TODO */}
                <button onClick={() => this.props.updateItem(item.id, parseInt(this.state.qty) || 0) }>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id) }>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}