//App.js
import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

// class component
// react shall create object for class component
export default class App extends React.Component {
    //react keyword
    // create and return virtual dom/view
    render() {
        console.log('App render')
        return (
            <div>
                {/* jsx comments */}

                {/* properties in react, props */}
                <Header title="Product App" />

                <Home starter={100} />

                <Footer  company="Product App"
                         year={2016 + 2}   
                />
            </div>
        )
    }
}