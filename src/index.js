import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test'
        };
    }

    setInputValue(event) {
        const text = event.target.value;
        this.setState({text});
    }

    render() {
        return (
            <div>
                <h1>State Example</h1>
                <input type="text" value={this.state.text} onChange={(event) => this.setInputValue(event)} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
