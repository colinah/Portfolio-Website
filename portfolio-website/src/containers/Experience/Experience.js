import React, { Component, Fragment } from 'react';
import classes from './Experience.module.scss';
import Ascend from '../../assests/Experience/Ascend.png';
import Creations from '../../assests/Experience/Creations.png';
import Construction from '../../assests/Experience/Construction.png';
import Personal from '../../assests/Experience/Personal.png';


class Experience extends Component {
    state = {
        displayModal: false
    }

    popup = () => {
        this.setState({displayModal: true})
        console.log(this.state.displayModal)
    }
    close = () => {
        this.setState({displayModal: false})
        console.log(this.state.displayModal)
    }

    render() {
        let ModalCSS = [classes.Modal, classes.Hide];
        if(this.state.displayModal){
            ModalCSS = [classes.Modal, classes.Show];
        }

        return(
            <Fragment>
            <div className={classes.Container}>
                <div className={classes.Break}>
                    <div className={classes.Left}></div>
                    <div className={classes.Center}>
                        <h2 className={classes.Title}>What have I built?</h2>
                    </div>
                    <div className={classes.Right}></div>
                </div>
                <div className={classes.Content}>
                    <h3 className={classes.TextOuter}>Ascend Performance and Rehab</h3>
                    <div className={classes.Section}>
                        <div className={classes.Image}>
                            <img alt="ascendpnr.com" src={Ascend} />
                        </div>
                        <div className={classes.Text}>
                            <h3 className={classes.TextInner}>Ascend Performance and Rehab</h3>
                            <div className={classes.Describe}>
                                <strong>Discription: </strong>Ascend Performance and Rehab is specilized in climbing training and recovery.
                            </div>
                            <div className={classes.Skills}>
                                <strong>Skills Used: </strong>HTML5, SCSS, JavaScript, PHP, MySQL, Wordpress, Custome Theme Development, Design, Apache, Linux
                            </div>
                            <div className={classes.Visit}><a href="https://ascendpnr.com">Visit AscendPnR</a></div>
                        </div>
                    </div> {/* Section */}
                    <h3 className={classes.TextOuter}>Helix Creations</h3>
                    <div className={classes.Section} >
                        <div className={[classes.Text, classes.Reverse].join(' ')}>
                            <h3 className={classes.TextInner}>Helix Creations</h3>
                            <div className={classes.Describe}>
                                <strong>Discription: </strong> Helix Creations is a personal blog for the owner of Helix Constrction Company.
                            </div>
                            <div className={classes.Skills}>
                                <strong>Skills Used: </strong>HTML5, SCSS, JavaScript, PHP, MySQL, Wordpress, Custome Theme Development, Design, Apache, Linux
                            </div>
                            <div className={classes.Visit}><a href="https://helixcreations.com">Visit Helix Creations</a></div>
                        </div>
                        <div className={classes.Image}>
                            <img alt="https://helixcreations.com" src={Creations} />
                        </div>
                    </div> {/* Section */}
                    <h3 className={classes.TextOuter}>Helix Construction Company</h3>
                    <div className={classes.Section}>
                        <div className={classes.Image}>
                            <img alt="ascendpnr.com" src={Construction} />
                        </div>
                        <div className={classes.Text}>
                            <h3 className={classes.TextInner}>Helix Construction Company</h3>
                            <div className={classes.Describe}>
                                <strong>Discription: </strong>Helix Construction Company builds zip-lines, ropes courses and other adventure construction projects. They are pretty awesome you should check them out!
                            </div>
                            <div className={classes.Skills}>
                                <strong>Skills Used: </strong>HTML5, SCSS, JavaScript, PHP, MySQL, Wordpress, Apache, Linux
                            </div>
                            <div className={classes.Visit}><a href="https://helixcreations.com">Visit Helix Construction Co</a></div>
                        </div>
                    </div> {/* Section */}
                    <h3 className={classes.TextOuter}>Your Favorite Site</h3>
                    <div className={classes.Section}>
                        <div className={[classes.Text, classes.Reverse].join(' ')}>
                            <h3 className={classes.TextInner}>Your Favorite Site</h3>
                            <div className={classes.Describe}>
                                <strong>Discription: </strong>A mastery of web development and design.
                            </div>
                            <div className={classes.Skills}>
                                <strong>Skills Used: </strong>HTML5, SCSS, JavaScript, React, Firebase, Wordpress API
                            </div>
                            <div className={classes.Visit} onClick={this.popup}>Visit Your Favorite Site</div>
                        </div>
                        <div className={classes.Image}>
                            <img alt="https://halecolin.com" src={Personal} />
                        </div>
                    </div> {/* Section */}

                </div>
            </div>
            <div className={ModalCSS.join(' ')}>
                <div className={classes.Joke}>Where did you think you were going? You are already on your favorite site.</div>
                <div onClick={this.close} className={classes.Close}>Close</div>
            </div>
            </Fragment>
        )
    }
}

export default Experience;