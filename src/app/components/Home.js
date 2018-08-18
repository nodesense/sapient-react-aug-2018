import React from 'react';

// class component can have state
export default class Home extends React.Component {

    static defaultProps = {
        starter : 0
    }

    constructor(props) {
        super(props)

        // keyword
        // state is owned by component
        //state is mutable
        // we can change state values
        // initializing state with props
        this.state = {
            counter: props.starter,
            show: true,
            flag: false
        }
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            console.log("Home interval ", this.state.counter);
            this.setState({
                counter : this.state.counter + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Home will unmount");
        clearInterval(this.timer)
    }
 

    increment() {
        console.log("increment called");
        //UGLY, mutating state directly
        this.state.counter++;
        // No data binding
        // dev responsible
        //BAD, keyword
        // trigger react to call render method
        this.forceUpdate(); 
    }



    //creating function only once per component instance
    //ES.NEXT
    // resolve this in class scope
    decrement = () => {
        console.trace();
        console.log('decrement called ');
        console.log('before ', this.state.counter)
        //GOOD, immutablity
        //keyword
        // takes new state as input
        // batch update*
        // merge the state*
        // async*
        // finally trigger react to call render
        this.setState({
            counter: this.state.counter - 1
        })

        this.setState({
            flag: !this.state.flag
        })

        // this.setState({
        //     show: !this.state.show
        // })
        console.log('after ', this.state.counter)
    }

    // es.next
    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        console.log("Home render");

        return (
            <div>
                <h2>Home</h2>

                <button onClick={this.toggle}>
                    Show/Hide Counter
                </button>

                { this.state.show && 
                <div>
                    <p>Counter</p>
                    <span>{this.state.counter}</span>
                </div>
                }

                {/* assigning a function to react */}
                {/* react shall call function on click */}
                {/* () => this.increment() a function created
                 on every render */}
                <button onClick={() => this.increment()}>
                    Incr
                </button>
                 
                <div onClick={this.decrement}>
                    <button onClick={this.decrement}>
                        Decr
                    </button>
                </div>
            </div>
        )
    }
}