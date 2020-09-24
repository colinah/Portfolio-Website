import React, { Component, Fragment } from 'react';
import classes from './Skills.module.scss';

class Skills extends Component {
    render(){
        return(
            <div>
                <div className={classes.Container}>
                    <div className={classes.Right}></div>
                    <div className={classes.Left}></div>
                    <h2 className={classes.Title}>Skills</h2>
                </div>
                <div className={classes.Content}>
                    <div className={classes.Light}></div>
                    <div className={classes.Dark}></div>
                </div>
            </div>
        )
    }
}

export default Skills