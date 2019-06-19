import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React initialized</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
