import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageAction';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {name} = this.props.user,
            { year, photos } = this.props.page,
            { setYear } = this.props.pageActions;

        return (
            <div>
                <User name={name}/>
                <Page photos={photos} year={year} setYear={setYear}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)