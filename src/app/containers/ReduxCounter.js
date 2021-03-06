//containers/ReduxCounter.js

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import ReduxCounter 
    from "../components/ReduxCounter";

import * as actions from "../state/actions";

// returns props, then the props passed to component
// state = store.getState()
// who invoke this function? called by container
// when? very first time, 
// when? on every subscribe
function mapStateToProps(state) {
    console.log('redux counter mapStateToProps')
    return {
        //propName: value from state
        counter: state.counter
    }
}

// return a props with functions, passed to component
// dispatch = store.dispatch func
// who calls this? container
// when? whenever new container instance created
function mapDispatchToProps(dispatch) {
    console.log('redux counter mapDispatchToProps')
    return {
        //propName: function(){}
        increment: function() {
            let action = actions.increment(1)
            //custom code
            dispatch(action)
        },

        // create wrapper functions and 
        // bind with dispatch for all the actions and 
        // return newly created functions
        // by calling props.actions.empty, will dispatch automatically
        actions: bindActionCreators(actions, dispatch)
    }
}


let connectDecoratorFn = connect(mapStateToProps, 
                                mapDispatchToProps)

// Pure Component, calls render only if counter props got changed
// subscribe/unsubscribe/getState
let ContainerComponent = connectDecoratorFn(ReduxCounter)

export default ContainerComponent;

//export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)