import React, { Component } from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{backgroundColor: '#eeee00'}}>
                <h3>New Component</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }

}

