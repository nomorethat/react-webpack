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
       // console.log(this.state.text);
    }

    render() {
        return (
            <div>
                <h1>State Example</h1>
                <input type="text" value={this.state.text} onChange={this.setInputValue.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
