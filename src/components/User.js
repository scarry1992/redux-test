import React, { Component, PropTypes } from 'react';

export default class User extends Component {
    static get propTypes() {
        return {
            name: PropTypes.string.isRequired
        }
    }

    render() {
        const { name } = this.props;

        return (
            <p>Hello, {name}!</p>
        );
    }
}