import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mass: [
                {
                    id: 1,
                    text: 'item 1'
                },
                {
                    id: 2,
                    text: 'item 2'
                },
                {
                    id: 3,
                    text: 'item 3'
                }
            ]
        };
    }

    render() {
        return (
            <div style={{border: '1px solid #000'}}>
                <h1>App Component</h1>
                <NewComponent mass={this.state.mass} text={'Test content'} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
