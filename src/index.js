import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    clickOnMe(event) {
        console.log('clicked on ', event.target);
    }
    render() {
        return (
            <div>
                <h1>Event Handler</h1>
                <button onClick={this.clickOnMe}>{ this.props.children }</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App>Click Me!</App>,
    document.getElementById('app')
);
