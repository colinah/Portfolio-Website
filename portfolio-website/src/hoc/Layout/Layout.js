import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import classes from './Layout.module.scss'


class Layout extends Component {
    componentWillMount() {
        document.title = 'Colin Hale'
      }
    render(){

        return (
            <Aux>
                <main className={classes.Layout}> 
                    {this.props.children}
                </main>
             </Aux>
        )
    }
}


export default Layout