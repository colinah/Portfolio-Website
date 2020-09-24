import React, { Component, Fragment } from 'react';
import classes from './Skills.module.scss';
import Html from '../../assests/icons/HTML.png';
import Css from '../../assests/icons/CSS.png';
import JavaScript from '../../assests/icons/javascript.svg';
import PHP from '../../assests/icons/Php.svg';
import Python from '../../assests/icons/Python.png';
import Matlab from '../../assests/icons/Matlab.png';
import Wordpress from '../../assests/icons/Wordpress.jpg';
import Laravel from '../../assests/icons/Laravel.jpg';
import REACT from '../../assests/icons/react.jpg';
import Vue from '../../assests/icons/vue.png';

class Skills extends Component {
    render(){
        return(
            <div>
                <div className={classes.Container}>
                    <div className={classes.Right}></div>
                    <div className={classes.Left}></div>
                    <h2 className={classes.Title}>Coding Skills</h2>
                </div>
                <div className={classes.Wrapper}>
                    <div className={classes.Content}>
                        <div className={classes.Light}></div>
                        <div className={classes.Dark}></div>
                    </div>
                    <div className={classes.Move}>
                            <h3 className={classes.Text}>Coding Languages</h3>
                            <div className={classes.Icons}>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Html} alt="HTML Logo"/>
                                    <h4 className={classes.Item}>HTML5</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Css} alt="CSS logo"/>
                                    <h4 className={classes.Item}>CSS</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={JavaScript} alt="Javascript logo"/>
                                    <h4 className={classes.Item}>JavaScript</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={PHP} alt="PHP Logo"/>
                                    <h4 className={classes.Item}>PHP</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Python} alt="Python Logo"/>
                                    <h4 className={classes.Item}>Python</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Matlab} alt="Matlab Logo"/>
                                    <h4 className={classes.Item}>Matlab</h4>
                                </div>
                            </div>
                            <h3 className={classes.Text}>Platforms and Frameworks</h3>
                            <div className={classes.Icons}>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Wordpress} alt="Wordpress Logo"/>
                                    <h4 className={classes.Item}>Wordpress</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Laravel} alt="Laravel logo"/>
                                    <h4 className={classes.Item}>Laravel</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={REACT} alt="React logo"/>
                                    <h4 className={classes.Item}>React</h4>
                                </div>
                                <div className={classes.Icon}>
                                    <img className={classes.Image} src={Vue} alt="Vue Logo"/>
                                    <h4 className={classes.Item}>Vue</h4>
                                </div>
                            </div>
                    </div>
 
                </div>
            </div>
        )
    }
}

export default Skills