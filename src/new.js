import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }
    renderItem(item, idx) {
        return (
            <li key={item.id}>{item.text} - {item.id}</li>
        );
    }
    render() {
        return (
            <div style={{backgroundColor: '#eeee00'}}>
                <h3>New Component</h3>
                <p>{this.props.text}</p>
                <ul>
                    {
                        this.props.mass.map(this.renderItem.bind(this))
                    }
                </ul>
            </div>
        );
    }
}

NewComponent.propTypes = {
    text: PropTypes.string.isRequired,
    mass: PropTypes.array.isRequired
};
