import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Archive from './Archive/Archive';
import Flexbox from './Posts/Flexbox/Flexbox';
import Resize from './Posts/Resize/Resize';
import Header from '../Header/Header';
import Footer from '../../containers/Footer/Footer';

class Pages extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/blog/archive" component={Archive}></Route>
                    {/* <Route path="/blog/css-flexbox-layouts" component={Flexbox}></Route> */}
                    <Route path="/blog/resizable-element" component={Resize}></Route>
                </Switch>
                <Footer />
            </Fragment>
        )
    }
}

export default Pages