import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Pages extends Component {
    render(){
        return (
            <Fragment>
                <Header />
            </Fragment>
        )
    }
}

export default Pages