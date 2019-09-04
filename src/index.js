import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {

    btnOnClick(event) {
        // console.log(event.target);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.h1Text }</h1>
                <button onClick={this.btnOnClick}>{ this.props.btnText }</button>
            </div>
        );
    }
}

App.propTypes = {
    btnText: PropTypes.string,
    h1Text: PropTypes.string.isRequired
};

App.defaultProps = {
    btnText: 'Default Click'
};

ReactDOM.render(
    <App h1Text={'Example props with validation and default'}/>,
    document.getElementById('app')
);
