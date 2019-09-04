import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{border: '1px solid #000'}}>
                <h1>App Component</h1>
                <NewComponent text={'Test content'} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
