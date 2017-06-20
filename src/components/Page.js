import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
    static get propTypes() {
        return {
            photos: PropTypes.array.isRequired,
            year: PropTypes.number.isRequired,
            setYear: PropTypes.func.isRequired
        }
    }

    onYearBtnClick(e) {
        this.props.setYear(+e.target.textContent)
    }

    render() {
        const { photos, year } = this.props;

        return (
            <div>
                <p>
                    <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2017</button>
                </p>
                <h3>{year} year</h3>
                <p> You have a {photos.length} photos.</p>
            </div>
        );
    }
}